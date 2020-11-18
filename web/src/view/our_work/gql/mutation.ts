import { gql } from '@apollo/client'

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