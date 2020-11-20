import { gql } from '@apollo/client'

export const fetchPostPageData = gql`
query PostPageQuery($postid: Int!) {
  post(postId: $postid) {
    origin {
      id
    }
    title
    length
    ancestor
    id
  }
  getPostChapters(postId: $postid) {
    id
    order
    title
  }
}
`

