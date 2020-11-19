import { gql } from '@apollo/client'

export const fetchBranchRep = gql`
  query getBranchContext {
    fandom(fandomId:1){
      id
      name
      length
    }

  }
`
