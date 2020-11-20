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