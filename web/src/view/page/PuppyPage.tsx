import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Colors } from '../../../../common/src/colors'
import { H1, H3 } from '../../style/header'
import { style } from '../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import SearchBar from '../component/SearchBar'
import ViewStoryBox from '../component/ViewStoryBox'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PuppyPage(props: HomePageProps) {


  return (
    <Page>
      <SearchBar />
      <Hero>
        <H1>BOWWOW 188</H1>
        <H3>PUPPY PUPPY</H3>
        <H3>UCLA, Fall 2020</H3>
      </Hero>
      <div>
        <BranchDiagram width={800} height={400} />
        <ViewStoryBox />
      </div>
    </Page>
  )
}

const Hero = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
  borderLeftColor: Colors.lemon + '!important',
  borderRightColor: Colors.lemon + '!important',
  borderLeftWidth: '4px',
  borderRightWidth: '4px',
})

