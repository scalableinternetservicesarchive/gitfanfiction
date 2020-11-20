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

export const fetchFandomData = gql`
query FandomDataQuery($fandomid: Int!) {
  fandom(fandomId: $fandomid){
    fandomType
    name
    length
    author
  }
}
`

export const ALLFANDOM = gql`
query AllFandom{
  fandoms {
    id
    name
  }
}
`