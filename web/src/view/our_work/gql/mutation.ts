import { gql } from '@apollo/client'

export const MAKENEWPOST = gql`
mutation MakeNewPost(
  $title:String!,
  $description: String!,
  $origin: Int!,
  $ancestor: Int!,
  $father: Int!,
  $fatherIndex: String!
) {

  makePost(input:{
    origin: $origin
    title: $title
    description: $description
    ancestor: $ancestor
    father: $father
    fatherIndex: $fatherIndex
  }) {
    id
    title
  }
}
`

export const ADDCHAPTER = gql`
mutation AddChapter(
  $title:String!,
  $body:String!
  $length:Int!,
  $originDirectFromFandom:Boolean!,
  $postOrFandomId: Int!,
) {
  addChapter(input:{
    title : $title
    length : $length
    originDirectFromFandom : $originDirectFromFandom
    postOrFandomId : $postOrFandomId
    body : $body
  }) {
    id
    title
  }
}
`


export const RATESTORY = gql`
  mutation RateStory (
    $some_story:Int!,
    $rating: Int!
    $some_user: Int!
  ){
    rateStory(
      input:{
        some_story: $some_story
        rating: $rating
        some_user: $some_user

      }
    ){
      rating
    }
  }
`

export const VOTECOMMENT = gql`
  mutation VoteComment (
    $some_comment:Int!,
    $user: Int!
  ){
    voteComment(
      input:{
        some_comment: $some_comment
        user: $user
      }
    ){
      vote
    }
  }
`

export const ADDCOMMENT = gql`
  mutation MakeComment (
    $story:Int!,
    $body:String!,
    $time:String!
  ){
    makeComment(
      input:{
        story:$story
        body:$body
        time:$time
      }
    ){
      id
    }
  }
`