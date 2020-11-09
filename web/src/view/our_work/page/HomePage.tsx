import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { style } from '../../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import SearchBar from '../component/SearchBar'
import { AppRouteParams } from '../nav/route'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomePage(props: HomePageProps) {


  return (
    <div>
      <Header>
        <div>
          <div>git fan fiction</div>
          <a href="/app/post">post</a>
        </div>
        <div>
          <a href="/app/setting">setting</a>
        </div>
        <div>
          <a href="/app/login">login</a>
        </div>
      </Header>
      <SearchBar />
      <BranchDiagram />
    </div>
  )
}

const Header = style('div', 'w-100', {
  height: 80,
  backgroundColor: '#8dc9bf',
  alignItems: 'center'
})
