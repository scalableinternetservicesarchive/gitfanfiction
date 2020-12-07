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
    authorId
  }
  getPostChapters(postId: $postid) {
    id
    order
    title
  }
}
`

export const fetchComments = gql`
query ViewpageQuery($postid: Int!) {
  comment(storyId: $postid){
    id
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
    id
  }
}
`

export const fetchChapters = gql`
query FetchChapters($postid: Int!) {
  getPostChapters(postId:$postid){
    order
    title
    body
  }
  post(postId: $postid) {
    title
    length
    id
    authorId
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