import { gql } from '@apollo/client'

export const MAKENEWPOST = gql`
mutation MakeNewPost(
  $title:String!,
  $description: String!,
  $body:String!
  $length:Int!,
  $originDirectFromFandom:Boolean!,
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

  addChapter(input:{
    title : $title
    length : $length
    originDirectFromFandom : $originDirectFromFandom
    postOrFandomId : $father
    body : $body
  }) {
    id
    title
  }
}
`