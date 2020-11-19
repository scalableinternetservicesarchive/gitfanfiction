import { gql, useMutation, useQuery } from '@apollo/client'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { style } from '../../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import SearchBar from '../component/SearchBar'
import { AppRouteParams } from '../nav/route'


interface HomePageProps extends RouteComponentProps, AppRouteParams { }


// export const fetchBranch = gql`
//   query getBranchContext {
//     fandom(fandomId:1){
//       id
//       name
//       length
//     }
//     getFandomPosts (fandomId:1){
//       id
//       upvote
//       length
//     }
//   }
// `

export const fetchPost = gql`
query fetchSomePost($postid: Int!) {
  post(postId: $postid) {
    id
    title
  }
}
`

export const addchapter = gql`
mutation pleaseadd($title:String!,$length:Int!,$originDirectFromFandom:Boolean!,$postOrFandomId:Int!,$body:String!) {
  addChapter(input:{
    title : $title
    length : $length
    originDirectFromFandom : $originDirectFromFandom
    postOrFandomId : $postOrFandomId
    body : $body
  }) {
    id
    title
    body
  }
}
`


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TestPage(props: HomePageProps) {

  // const [error, setError] = React.useState("")
  const [field, setField] = React.useState("")
  const [fid, setFid] = React.useState(0)
  const [pid, setPid] = React.useState(0)


  const { loading, data } = useQuery(fetchPost, {
    variables: { postid: 1 },
  })

  const [addTodo, cc] = useMutation(addchapter);

  const sendform = () =>
    addTodo({
      variables: {
        title: "kljsfjlasfjljlk",
        length: 5,
        originDirectFromFandom: false,
        postOrFandomId: 2,
        body: "lkjsdlfkjsd"
      }
    });

  if (!loading) console.log(data)
  console.log(cc.data)

  // const fandomId = 1
  // fetch('/tree', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ fandomId }),
  // })
  //   .then(async res => {
  //     if (res.status == 200) return res.text();
  //     const err = await res.text()
  //     throw err;
  //   })
  //   .then(setError)
  //   .catch(err => {
  //     setError(err.toString())
  //   })

  //-----

  return (
    <div>
      <Header>
        <div>
          <div>{loading ? null : data.post.title}</div>
          <a href="/app/post">post</a>
        </div>
        <div>
          <a href="/app/setting">setting</a>
        </div>
        <div>
          <a href="/app/login">login</a>
        </div>
        <div>
          <a href="/app/request-fandom">request fandom</a>
        </div>
      </Header>
      <div>type fandom id here {pid} </div>

      <input value={field} onChange={(event) => {
        const a = parseInt(event.target.value)
        if (!isNaN(a)) setFid(a)
        setField(event.target.value);
        if (event.target.value == "send") sendform();
      }} />
      <SearchBar />
      <BranchDiagram fandomId={fid} setPostId={setPid} />
    </div>
  )
}

const Header = style('div', 'w-100', {
  height: 100,
  backgroundColor: '#8dc9bf',
  alignItems: 'center'
})
