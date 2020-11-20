require('honeycomb-beeline')({
  writeKey: process.env.HONEYCOMB_KEY || 'd29d5f5ec24178320dae437383480737',
  dataset: process.env.APP_NAME || 'bespin',
  serviceName: process.env.APPSERVER_TAG || 'local',
  enabledInstrumentations: ['express', 'mysql2', 'react-dom/server'],
  sampleRate: 10,
})

import assert from 'assert'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { json, raw, RequestHandler, static as expressStatic } from 'express'
import { getOperationAST, parse as parseGraphql, specifiedRules, subscribe as gqlSubscribe, validate } from 'graphql'
import { GraphQLServer } from 'graphql-yoga'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { forAwaitEach, isAsyncIterable } from 'iterall'
import path from 'path'
import 'reflect-metadata'
import { v4 as uuidv4 } from 'uuid'
import { checkEqual, Unpromise } from '../../common/src/util'
import { Config } from './config'
import { migrate } from './db/migrate'
import { initORM } from './db/sql'
import { Chapter } from './entities/Chapter'
import { Fandom } from './entities/Fandom'
import { Post } from './entities/Post'
import { Session } from './entities/Session'
import { User } from './entities/User'
import { getSchema, graphqlRoot, pubsub } from './graphql/api'
import { ConnectionManager } from './graphql/ConnectionManager'
import { expressLambdaProxy } from './lambda/handler'
import { renderApp } from './render'


const getuser = (a: ContextParameters): User => {
  // console.log("I am:")
  // console.log(a.request.body)
  // console.log((a.request as any)?.user || null)
  return (a.request as any)?.user || null
}

const server = new GraphQLServer({
  typeDefs: getSchema(),
  resolvers: graphqlRoot as any,
  context: ctx => ({
    ...ctx, pubsub, user: getuser(ctx)
  }),
})

server.express.use(cookieParser())
server.express.use(json())
server.express.use(raw())
server.express.use('/app', cors(), expressStatic(path.join(__dirname, '../../public')))

const asyncRoute = (fn: RequestHandler) => (...args: Parameters<RequestHandler>) =>
  fn(args[0], args[1], args[2]).catch(args[2])

server.express.get('/', (req, res) => {
  console.log('GET /')
  res.redirect('/app')
})

//redirect here
server.express.get(
  '/app/post',
  asyncRoute(async (req, res, next) => {
    console.log('GET /app')
    const authToken = req.cookies.authToken || req.header('x-authtoken')

    if (authToken) renderApp(req, res)
    else res.redirect("../app/login")
  })
)

server.express.get('/app/*', (req, res) => {
  console.log('GET /app')
  renderApp(req, res)
})

server.express.post(
  '/auth/login',
  asyncRoute(async (req, res) => {
    console.log('POST /auth/login')
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({ where: { email } })
    if (!user || password !== user.password) {
      res.status(403).send('Forbidden')
      return
    }

    const authToken = uuidv4()

    await Session.delete({ user })

    const session = new Session()
    session.authToken = authToken
    session.user = user
    await Session.save(session).then(s => console.log('saved session ' + s.id))

    const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000 // 30 days
    res
      .status(200)
      .cookie('authToken', authToken, { maxAge: SESSION_DURATION, path: '/', httpOnly: true, secure: Config.isProd })
      .send('Success!')
  })
)

server.express.post(
  '/auth/logout',
  asyncRoute(async (req, res) => {
    console.log('POST /auth/logout')
    const authToken = req.cookies.authToken
    if (authToken) {
      await Session.delete({ authToken })
    }
    res.status(200).cookie('authToken', '', { maxAge: 0 }).send('Success!')
  })
)

server.express.post(
  '/auth/signup',
  asyncRoute(async (req, res) => {
    console.log('POST /auth/signup')
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    if (await User.findOne({ where: { email } })) {
      res.status(403).send('Existing Email')
      return
    }

    const user = new User()
    user.name = name
    user.password = password
    user.email = email
    await User.save(user).then(s => console.log('saved user ' + s.id))
    res.status(200).send('Success!')
  }

  )
)

server.express.post(
  '/request-fandom',
  asyncRoute(async (req, res) => {
    console.log('POST /request-fandom')

    //title, author, genre, nbooks, chapters
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const length = req.body.length;


    const fandom = new Fandom()
    fandom.author = author;
    fandom.name = title;
    fandom.fandomType = genre;
    fandom.length = length.toString()
    await Fandom.save(fandom).then(s => console.log('saved fandom ' + s.id))

    let order = 1
    const nbook = length.length;
    for (let i = 0; i < nbook; i++) {
      const singleBook = []
      for (let j = 0; j < length[i]; j++) {
        let chapter = new Chapter()
        chapter.order = order
        chapter.originDirectFromFandom = true
        chapter.fandom = fandom
        chapter.body = ""
        chapter.title = ""
        if (j == 0) chapter.title = "book/episode " + (i + 1) + " begins here"
        singleBook.push(chapter)
        order += 1
      }
      Chapter.save(singleBook).then(s => console.log('saved "' + title + '" / book ' + (i + 1) + ' / ' + length[i] + 'chapters'))
    }

    res.status(200).send('Success!')

  }
  )
)

server.express.post(
  '/tree',
  asyncRoute(async (req, res) => {
    console.log('POST /tree ' + req.body.fandomId)

    //title, author, genre, nbooks, chapters
    const ancestorid = req.body.fandomId

    //get main (fandom) data ready
    const fandom = await Fandom.findOne({ where: { id: ancestorid } })
    if (fandom == undefined) { res.status(404).send('Do Not Exist'); return }
    const main = [0, fandom.fandomType, JSON.parse("[" + fandom.length + "]")] //maintain that zero is fandom id. always!!

    //get sub (post) data ready
    const sub = []
    const posts = await Post.find({ where: { ancestor: ancestorid } })

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i]
      const index = post.fatherIndex.split(",").map((i) => parseInt(i))
      const originid = (index[0] == 0) ? post.father : 0
      const length = post.length.split(",").map((i) => parseInt(i))

      const postData = [
        post.id,
        originid,
        index,
        length,
        post.upvote
      ]
      sub.push(postData)
    }

    const data = { main, sub }
    res.status(200).send(JSON.stringify(data))

    // what we need
    // const exampleData: dataInterface = {
    //   "main": [123456, "book", [30, 20, 50, 20]],
    //   "sub": [
    //     [464701, 464700, [1, 5], [500, 1000, 900, 400, 1000, 1000], 0],
    //     [464700, 123456, [1, 5], [500, 1000, 900, 400, 1000, 1000], 30],
    //     [225323, 123456, [2, 10], [1300, 900, 300, 2000], 3],
    //     [235234, 123456, [2, 0], [1000], 0],
    //     [234599, 225323, [1, 3], [1500], 3] //starts from 1 because there is only one book for substory 225323
    //   ]
    // }



    // fandom.author = author;
    // fandom.name = title;
    // fandom.fandomType = genre;
    // fandom.length = length.toString()
    // await Fandom.save(fandom).then(s => console.log('saved fandom ' + s.id))

    // let order = 1
    // const nbook = length.length;
    // for (let i = 0; i < nbook; i++) {
    //   const singleBook = []
    //   for (let j = 0; j < length[i]; j++) {
    //     let chapter = new Chapter()
    //     chapter.order = order
    //     chapter.originDirectFromFandom = true
    //     chapter.fandom = fandom
    //     chapter.body = ""
    //     chapter.title = ""
    //     if (j == 0) chapter.title = "book/episode " + (i + 1) + " begins here"
    //     singleBook.push(chapter)
    //     order += 1
    //   }
    //   Chapter.save(singleBook).then(s => console.log('saved "' + title + '" / book ' + (i + 1) + ' / ' + length[i] + 'chapters'))
    // }




  }
  )
)

server.express.get(
  '/api/:function',
  asyncRoute(async (req, res) => {
    console.log(`GET ${req.path}`)
    const { statusCode, headers, body } = await expressLambdaProxy(req)
    res
      .status(statusCode)
      .contentType(String(headers?.['Content-Type'] || 'text/plain'))
      .send(body)
  })
)

server.express.post(
  '/api/:function',
  asyncRoute(async (req, res) => {
    console.log(`POST ${req.path}`)
    const { statusCode, headers, body } = await expressLambdaProxy(req)
    res
      .status(statusCode)
      .contentType(String(headers?.['Content-Type'] || 'text/plain'))
      .send(body)
  })
)

server.express.post('/graphqlsubscription/connect', (req, res) => {
  console.log('POST /graphqlsubscription/connect')
  ConnectionManager.connect(req)
  res.status(200).header('Sec-WebSocket-Protocol', 'graphql-ws').send('')
})

server.express.post('/graphqlsubscription/connection_init', (req, res) => {
  console.log('POST /graphqlsubscription/connection_init')
  res.status(200).send(JSON.stringify({ type: 'connection_ack' }))
})

server.express.post(
  '/graphqlsubscription/start',
  asyncRoute(async (req, res) => {
    console.log('POST /graphqlsubscription/start')
    const connId = ConnectionManager.getConnId(req)

    const { id, payload } = req.body
    // If we already have a subscription with this id, unsubscribe from it first.
    ConnectionManager.endSubscription(connId, id)

    const { query, variables, operationName } = payload
    const document = parseGraphql(query)
    const operationAST = getOperationAST(document, operationName)
    checkEqual(
      'subscription',
      operationAST?.operation,
      'expected a subscription graphql operation, got: ' + operationAST?.operation
    )

    let subscription: Unpromise<ReturnType<typeof gqlSubscribe>>
    try {
      const validationErrors = validate(server.executableSchema, document, [...specifiedRules])
      if (validationErrors.length > 0) {
        throw {
          errors: validationErrors,
        }
      }

      subscription = await gqlSubscribe({
        contextValue: { pubsub },
        document,
        operationName,
        rootValue: graphqlRoot,
        schema: server.executableSchema,
        variableValues: variables,
      })
    } catch (e) {
      if (e.errors) {
        await ConnectionManager.send(connId, JSON.stringify({ id, type: 'data', payload: { errors: e.errors } }))
      } else {
        await ConnectionManager.send(connId, JSON.stringify({ id, type: 'error', payload: { message: e.message } }))
      }

      // Remove the operation on the server side as it will be removed also in the client.
      ConnectionManager.endSubscription(connId, id)
      throw e
    }

    assert.ok(isAsyncIterable(subscription))
    ConnectionManager.registerSubscription(connId, id, subscription)

    forAwaitEach(subscription, payload => ConnectionManager.send(connId, JSON.stringify({ id, type: 'data', payload })))
      .then(() => ConnectionManager.send(connId, JSON.stringify({ id, type: 'complete' })))
      .catch((e: Error) => {
        let error = e
        if (Object.keys(error).length === 0) {
          // plain Error object cannot be JSON stringified.
          error = { name: error.name, message: error.message }
        }
        return ConnectionManager.send(connId, JSON.stringify({ id, type: 'error', payload: error }))
      })

    res.status(200).send('')
  })
)

server.express.post('/graphqlsubscription/stop', (req, res) => {
  console.log('POST /graphqlsubscription/stop')
  const connId = ConnectionManager.getConnId(req)
  const { id } = req.body
  ConnectionManager.endSubscription(connId, id)
  res.status(200).send('')
})

server.express.post('/graphqlsubscription/disconnect', (req, res) => {
  console.log('POST /graphqlsubscription/disconnect')
  ConnectionManager.disconnect(req)
  res.status(200).send('')
})

server.express.post(
  '/graphql',
  asyncRoute(async (req, res, next) => {
    const authToken = req.cookies.authToken || req.header('x-authtoken')

    if (authToken) {
      const session = await Session.findOne({ where: { authToken }, relations: ['user'] })
      if (session) {
        const reqAny = req as any
        reqAny.user = session.user
      }
    }
    next()
  })
)

initORM()
  .then(() => migrate())
  .then(() =>
    server.start(
      {
        port: Config.appserverPort,
        endpoint: '/graphql',
        subscriptions: '/graphqlsubscription',
        playground: '/graphql',
      },
      () => {
        console.log(`server started on http://localhost:${Config.appserverPort}/`)
      }
    )
  )
  .catch(err => console.error(err))
