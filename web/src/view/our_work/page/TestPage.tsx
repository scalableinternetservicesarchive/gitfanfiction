import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { style } from '../../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import SearchBar from '../component/SearchBar'
import { AppRouteParams } from '../nav/route'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }


// export const fetchBranch = gql`
//   query getBranchContext {
//     fandom(fandomId:1){
//       id
//       name
//       length
//     }
//     getFandomPosts (fandomId:1){
//       id
//       upvote
//       length
//     }
//   }
// `


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TestPage(props: HomePageProps) {

  const [error, setError] = React.useState("")

  const fandomId = 1

  fetch('/tree', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fandomId }),
  })
    .then(async res => {
      if (res.status == 200) return res.text();
      const err = await res.text()
      throw err;
    })
    .then(setError)
    .catch(err => {
      setError(err.toString())
    })

  //-----

  return (
    <div>
      <Header>
        <div>
          <div>{error}</div>
          <a href="/app/post">post</a>
        </div>
        <div>
          <a href="/app/setting">setting</a>
        </div>
        <div>
          <a href="/app/login">login</a>
        </div>
        <div>
          <a href="/app/request-fandom">request fandom</a>
        </div>
      </Header>
      <SearchBar />
      <BranchDiagram />
    </div>
  )
}

const Header = style('div', 'w-100', {
  height: 100,
  backgroundColor: '#8dc9bf',
  alignItems: 'center'
})
