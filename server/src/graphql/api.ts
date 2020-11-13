/* eslint-disable prettier/prettier */
import { readFileSync } from 'fs'
import { PubSub } from 'graphql-yoga'
import path from 'path'
import { check } from '../../../common/src/util'
import { Comment } from '../entities/Comment'
import { Fandom } from '../entities/Fandom'
import { Post } from '../entities/Post'
import { Rating } from '../entities/Rating'
//import { Story } from '../entities/Story'
import { Survey } from '../entities/Survey'
import { SurveyAnswer } from '../entities/SurveyAnswer'
import { SurveyQuestion } from '../entities/SurveyQuestion'
import { User } from '../entities/User'
import { Resolvers } from './schema.types'

export const pubsub = new PubSub()

export function getSchema() {
  const schema = readFileSync(path.join(__dirname, 'schema.graphql'))
  return schema.toString()
}

interface Context {
  user: User | null
  fandom: Fandom | null
  post: Post | null
  comment: Comment | null
  request: Request
  response: Response
  pubsub: PubSub
  rating: Rating | null
}

export const graphqlRoot: Resolvers<Context> = {
  Query: {
    self: (_, args, ctx) => ctx.user,
    fandoms: () => Fandom.find(),
    fandom: async (_, { fandomId }) => (await Fandom.findOne({ where: { id: fandomId } }))!,
    posts: () => Post.find(),
    post: async (_, { postId }) => (await Post.findOne({ where: { id: postId } }))!,
    comments: () => Comment.find(),
    comment: async (_, { commentId }) => (await Comment.findOne({ where: { id: commentId } }))!,
    ratings: () => Rating.find(),
    rating: async (_, { ratingId }) => (await Rating.findOne({ where: { id: ratingId } })) || null,
    survey: async (_, { surveyId }) => (await Survey.findOne({ where: { id: surveyId } })) || null,
    surveys: () => Survey.find(),
  },
  Mutation: {
    addFandom: async (_, { input }, ctx) => {
      const { fandomType, name, author, length } = input
      const fandom = new Fandom()
      fandom.fandomType = fandomType
      fandom.name = name
      fandom.author = author
      fandom.length = length
      await fandom.save()
      return fandom
    },

    makePost: async (_, { input }, ctx) => {
      const { origin, start, length, title, body } = input
      const post = new Post()
      post.origin = origin
      post.start = start
      post.length = length

      post.title = title
      post.body = body
      post.rating = 0
      post.num_rating = 0
      await post.save()
      return post
    },

    makeComment: async (_, { input }, ctx) => {
      const { story, body, time } = input
      const comment = new Comment()
      comment.story=story
      comment.body = body
      comment.time = time
      comment.vote = 0
      await comment.save()
      return comment
    },

    voteComment: async (_, { input }, ctx) => {
      const { some_comment } = input
      const comment = check(await Comment.findOne({ where: { id: some_comment } }))
      //const some_user = check(await User.findOne({ where: { id: user } }))
      //some_user.votes.push(some_comment)
      comment.vote += 1
      await comment.save()
      return true
    },

    rateStory: async (_, { input }, ctx) => {
      const { some_story, rating, user} = input
      //const p= post(some_story)
      const some_post = check(await Post.findOne({ where: { id: some_story } }))
      const rate = new Rating()
      rate.story=some_story
      rate.rating=rating
      rate.user=user
      //const exist = check(await Rating.findOne({ where: { story: some_story} }))
      const exist =null
      if(exist==null){
        // eslint-disable-next-line prettier/prettier
        some_post.rating = Math.round(100*(some_post.rating * some_post.num_rating + rating) / (some_post.num_rating + 1))/100
        some_post.num_rating += 1
      }
      await some_post.save()
      return rate
    },

    answerSurvey: async (_, { input }, ctx) => {
      const { answer, questionId } = input
      const question = check(await SurveyQuestion.findOne({ where: { id: questionId }, relations: ['survey'] }))

      const surveyAnswer = new SurveyAnswer()
      surveyAnswer.question = question
      surveyAnswer.answer = answer
      await surveyAnswer.save()

      question.survey.currentQuestion?.answers.push(surveyAnswer)
      ctx.pubsub.publish('SURVEY_UPDATE_' + question.survey.id, question.survey)

      return true
    },
    nextSurveyQuestion: async (_, { surveyId }, ctx) => {
      // check(ctx.user?.userType === UserType.Admin)
      const survey = check(await Survey.findOne({ where: { id: surveyId } }))
      survey.currQuestion = survey.currQuestion == null ? 0 : survey.currQuestion + 1
      await survey.save()
      ctx.pubsub.publish('SURVEY_UPDATE_' + surveyId, survey)
      return survey
    },
  },
  Subscription: {
    surveyUpdates: {
      subscribe: (_, { surveyId }, context) => context.pubsub.asyncIterator('SURVEY_UPDATE_' + surveyId),
      resolve: (payload: any) => payload,
    },
  },
}
