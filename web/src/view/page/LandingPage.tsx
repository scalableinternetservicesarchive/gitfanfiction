import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Colors } from '../../../../common/src/colors'
import { H1, H3 } from '../../style/header'
import { style } from '../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import FeaturedFandoms from '../component/FeaturedFandoms'
import PopularGenres from '../component/PopularGenres'
import SearchBar from '../component/SearchBar'
import SuggestedStories from '../component/SuggestedStories'
import TopRatedStories from '../component/TopRatedStories'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LandingPage(props: HomePageProps) {

  return (
    <Page>
      <SearchBar />
      <Main>
        <div style={styles.columns}>
          <div style={styles.mainColumn}>
            <H1>git fanfiction</H1>
            <H3>CS 188, Fall 2020</H3>
          </div>

          <button style={styles.submitStory} type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href = '/app/story-submission'
          }}>
            Submit Story!
          </button>
        </div>
      </Main>
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        <BranchDiagram />
      </div>

      <TopRatedStories />

      <div style={styles.columns}>
        <FeaturedFandoms />

        <PopularGenres />

        <SuggestedStories />
      </div>
    </Page>
  )
}



const styles = {
  columns: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    margin: '5px 0',
  },
  column: {
    borderRightWidth: '4px',
    flex: '1',
    border: '1px solid black',
    margin: '15px',
    padding: '5px',
  },
  ol: {
    marginLeft: '25px',
  },
  mainColumn: {
    borderRightWidth: '4px',
    flex: '1',
    margin: '15px',
    marginRight: '30px',
    padding: '5px',
  },
  submitStory: {
    borderRightWidth: '4px',
    flex: '1',
    margin: '25px',
    padding: '20px',
    fontSize: '26',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#2e2c2c'
  } as React.CSSProperties,
  browseMore: {
    display: 'block',
    textAlign: 'center',
  } as React.CSSProperties,
  suggestedStory: {

  }
}
const Main = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
  borderLeftColor: Colors.lemon + '!important',
  borderRightColor: Colors.lemon + '!important',
  borderLeftWidth: '4px',
  borderRightWidth: '4px',
})