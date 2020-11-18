import { gql } from '@apollo/client'

export const getPost = gql`
query fetchPost($postid: Int!) {
  post(postId: $postid) {
    title
}
`