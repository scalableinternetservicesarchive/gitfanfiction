import { gql } from '@apollo/client'


export const fetchPost = gql`
  query FetchPost($postId: Int!) {
    post(postId: $postId) {
      title
    }
  }
`