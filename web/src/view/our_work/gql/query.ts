import { gql } from '@apollo/client'

export const getPost = gql`
query fetchAPost($postid: Int!) {
  post(postId: $postid) {
    title
    length
  }
  getPostChapters(postId: $postid) {
    id
    order
    title
  }
}
`

