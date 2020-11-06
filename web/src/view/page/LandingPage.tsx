import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Colors } from '../../../../common/src/colors'
import { H1, H2, H3 } from '../../style/header'
import { style } from '../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import CategoryLists from '../component/CategoryLists'
import SearchBar from '../component/SearchBar'
import StoryEntry from '../component/StoryEntry'
import SuggestedStoryEntry from '../component/SuggestedStoryEntry'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

const entry0 = {
  title: "To Kill a Mockingbird",
  author_name: "joe_bruin",
  blurb: 'Attorney strives to prove the innocence of a unjustly accused black man.',
  date: '11/1/2020',
  story_id: 'puppy',
  rating: '4.92',
};
const entry1 = {
  title: "Fahrenheit 451",
  author_name: "pyro123",
  blurb: 'In an oppressive future, a fireman questions the burning of books.',
  date: '11/2/2020',
  story_id: 'puppy',
  rating: '4.89',
};
const entry2 = {
  title: "Hamlet",
  author_name: "BillShakespeare",
  blurb: 'To be, or not to be, that is the question...',
  date: '11/3/2020',
  story_id: 'puppy',
  rating: '4.87',
};
const entry3 = {
  title: "Final Fantasy VII",
  author_name: "shinra7",
  blurb: 'Mercenary team fighting to stop a world-controlling megacorporation.',
  date: '11/5/2020',
  story_id: 'puppy',
  rating: '4.85',
};

const entry4 = {
  title: "Hunger Games",
  author_name: "katniss_fan",
  blurb: 'Competitors chosen for televised fight-to-the-death.',
  date: '11/4/2020',
  story_id: 'puppy',
  rating: '4.82',
};

const entry5 = {
  title: "Zathura",
  author_name: "SPACE",
  blurb: 'Not-so-ordinary boardgame in space!',
  date: '11/6/2020',
  story_id: 'puppy',
  rating: '4.79',
};

const entry6 = {
  title: "The Matrix",
  author_name: "cant_wake_up",
  blurb: 'Man is offered a red pill or a blue pill.',
  date: '11/7/2020',
  story_id: 'puppy',
  rating: '4.77',
};

const entry7 = {
  title: "Harry Potter",
  author_name: "MissingHorcrux",
  blurb: "The Boy Who Lived is thrust into the Wizarding World.",
  date: '11/8/2020',
  story_id: 'puppy',
  rating: '4.75',
};

const entry8 = {
  title: "Star Wars: Episode X",
  author_name: "PrequelMemes",
  blurb: 'The saga continues! Now with one hundred Death Stars!',
  date: '11/9/2020',
  story_id: 'puppy',
  rating: '4.76',
};

const entry9 = {
  title: "Supernatural",
  author_name: "cain_abel",
  blurb: 'Just two brothers hunting demons and other supernatural stuff.',
  date: '11/10/2020',
  story_id: 'puppy',
  rating: '4.74',
};

const fandom = {
  fandom0: 'Harry Potter', fandom_id0: 'harrypotter',
  fandom1: 'Hunger Games', fandom_id1: 'hunger-games',
  fandom2: 'Percy Jackson', fandom_id2: 'percy-jackson',
  fandom3: 'Twilight', fandom_id3: 'twilight',
  fandom4: 'Lord of the Rings', fandom_id4: 'lotr',
  fandom5: 'Star Wars', fandom_id5: 'star-wars',
  fandom6: 'The Hobbit', fandom_id6: 'hobbit',
  fandom7: 'Chronicles of Narnia', fandom_id7: 'narnia',
  fandom8: 'A Song of Ice and Fire', fandom_id8: 'asoiaf',
  fandom9: 'Divergent Trilogy', fandom_id9: 'divergent',
  fandom10: 'Artemis Fowl', fandom_id10: 'artemis-fowl',
  fandom11: 'Sherlock Holmes', fandom_id11: 'sherlock-holmes',
  fandom12: 'Avatar: TLA', fandom_id12: 'avatar-tla',
  fandom13: 'Fifty Shades Trilogy', fandom_id13: 'fifty-shades',
  fandom14: 'Maze Runner Trilogy', fandom_id14: 'maze-runner',
  fandom15: 'Inheritance Cycle', fandom_id15: 'inheritance',
  fandom16: 'Kingdom Hearts', fandom_id16: 'kingdom-hearts',
  fandom17: 'His Dark Materials', fandom_id17: 'dark-materials',
  fandom18: 'Batman', fandom_id18: 'batman',
  fandom19: 'Naruto', fandom_id19: 'naruto'
}

const genres = {
  genre0: 'Adventure',
  genre1: 'Science Fiction',
  genre2: 'Romance',
  genre3: 'Fantasy',
  genre4: 'Horror',
  genre5: 'Thriller',
  genre6: 'Mystery',
  genre7: 'TV Shows',
  genre8: 'Humor',
  genre9: 'Drama',
  genre10: 'Supernatural',
  genre11: 'Movies',
  genre12: 'Anime',
  genre13: 'Crime',
  genre14: 'Poetry',
  genre15: 'Comics',
  genre16: 'Parody',
  genre17: 'Spiritual',
  genre18: 'Western',
  genre19: 'Classics',
}

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

      <div style={styles.column}>
        <H2 style={{ textAlign: 'center' }}>Top Rated Stories</H2>
        <a className="browseMore" style={styles.browseMore} href={'/app/top-stories'}>Browse All</a>
        <ol style={styles.ol}>
          <li>
            <StoryEntry
              title={entry0.title}
              author={entry0.author_name}
              blurb={entry0.blurb}
              date={entry0.date}
              story_id={entry0.story_id}
              rating={entry0.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry1.title}
              author={entry1.author_name}
              blurb={entry1.blurb}
              date={entry1.date}
              story_id={entry1.story_id}
              rating={entry1.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry2.title}
              author={entry2.author_name}
              blurb={entry2.blurb}
              date={entry2.date}
              story_id={entry2.story_id}
              rating={entry2.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry3.title}
              author={entry3.author_name}
              blurb={entry3.blurb}
              date={entry3.date}
              story_id={entry3.story_id}
              rating={entry3.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry4.title}
              author={entry4.author_name}
              blurb={entry4.blurb}
              date={entry4.date}
              story_id={entry4.story_id}
              rating={entry4.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry5.title}
              author={entry5.author_name}
              blurb={entry5.blurb}
              date={entry5.date}
              story_id={entry5.story_id}
              rating={entry5.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry6.title}
              author={entry6.author_name}
              blurb={entry6.blurb}
              date={entry6.date}
              story_id={entry6.story_id}
              rating={entry6.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry7.title}
              author={entry7.author_name}
              blurb={entry7.blurb}
              date={entry7.date}
              story_id={entry7.story_id}
              rating={entry7.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry8.title}
              author={entry8.author_name}
              blurb={entry8.blurb}
              date={entry8.date}
              story_id={entry8.story_id}
              rating={entry8.rating}
            />
          </li>
          <li>
            <StoryEntry
              title={entry9.title}
              author={entry9.author_name}
              blurb={entry9.blurb}
              date={entry9.date}
              story_id={entry9.story_id}
              rating={entry9.rating}
            />
          </li>
        </ol>
      </div>


      <div style={styles.columns}>
        <div style={styles.column}>
          <H2 style={{ textAlign: 'center' }}>Featured Fandoms</H2>
          <a className="browseMore" style={styles.browseMore} href={'/app/featured-fandoms'}>Browse All</a> <br />
          <CategoryLists
            entry0={fandom.fandom0} entry_id0={fandom.fandom_id0}
            entry1={fandom.fandom1} entry_id1={fandom.fandom_id1}
            entry2={fandom.fandom2} entry_id2={fandom.fandom_id2}
            entry3={fandom.fandom3} entry_id3={fandom.fandom_id3}
            entry4={fandom.fandom4} entry_id4={fandom.fandom_id4}
            entry5={fandom.fandom5} entry_id5={fandom.fandom_id5}
            entry6={fandom.fandom6} entry_id6={fandom.fandom_id6}
            entry7={fandom.fandom7} entry_id7={fandom.fandom_id7}
            entry8={fandom.fandom8} entry_id8={fandom.fandom_id8}
            entry9={fandom.fandom9} entry_id9={fandom.fandom_id9}
            entry10={fandom.fandom10} entry_id10={fandom.fandom_id10}
            entry11={fandom.fandom11} entry_id11={fandom.fandom_id11}
            entry12={fandom.fandom12} entry_id12={fandom.fandom_id12}
            entry13={fandom.fandom13} entry_id13={fandom.fandom_id13}
            entry14={fandom.fandom14} entry_id14={fandom.fandom_id14}
            entry15={fandom.fandom15} entry_id15={fandom.fandom_id15}
            entry16={fandom.fandom16} entry_id16={fandom.fandom_id16}
            entry17={fandom.fandom17} entry_id17={fandom.fandom_id17}
            entry18={fandom.fandom18} entry_id18={fandom.fandom_id18}
            entry19={fandom.fandom19} entry_id19={fandom.fandom_id19}
          />
        </div>

        <div style={styles.column}>
          <H2 style={{ textAlign: 'center' }}>Popular Genres</H2>
          <a className="browseMore" style={styles.browseMore} href={'/app/popular-genres'}>Browse All</a> <br />
          <CategoryLists
            entry0={genres.genre0} entry_id0={genres.genre0}
            entry1={genres.genre1} entry_id1={genres.genre1}
            entry2={genres.genre2} entry_id2={genres.genre2}
            entry3={genres.genre3} entry_id3={genres.genre3}
            entry4={genres.genre4} entry_id4={genres.genre4}
            entry5={genres.genre5} entry_id5={genres.genre5}
            entry6={genres.genre6} entry_id6={genres.genre6}
            entry7={genres.genre7} entry_id7={genres.genre7}
            entry8={genres.genre8} entry_id8={genres.genre8}
            entry9={genres.genre9} entry_id9={genres.genre9}
            entry10={genres.genre10} entry_id10={genres.genre10}
            entry11={genres.genre11} entry_id11={genres.genre11}
            entry12={genres.genre12} entry_id12={genres.genre12}
            entry13={genres.genre13} entry_id13={genres.genre13}
            entry14={genres.genre14} entry_id14={genres.genre14}
            entry15={genres.genre15} entry_id15={genres.genre15}
            entry16={genres.genre16} entry_id16={genres.genre16}
            entry17={genres.genre17} entry_id17={genres.genre17}
            entry18={genres.genre18} entry_id18={genres.genre18}
            entry19={genres.genre19} entry_id19={genres.genre19}
          />
        </div>

        <div style={styles.column}>
          <H2 style={{ textAlign: 'center' }}>Suggested Stories</H2>
          <a className="browseMore" style={styles.browseMore} href={'/app/random-stories'}>Browse All</a> <br />
          <ol style={styles.ol}>
            <li>
              <SuggestedStoryEntry
                title={entry0.title}
                author={entry0.author_name}
                date={entry0.date}
                story_id={entry0.story_id}
                rating={entry0.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry1.title}
                author={entry1.author_name}
                date={entry1.date}
                story_id={entry1.story_id}
                rating={entry1.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry2.title}
                author={entry2.author_name}
                date={entry2.date}
                story_id={entry2.story_id}
                rating={entry2.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry3.title}
                author={entry3.author_name}
                date={entry3.date}
                story_id={entry3.story_id}
                rating={entry3.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry4.title}
                author={entry4.author_name}
                date={entry4.date}
                story_id={entry4.story_id}
                rating={entry4.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry5.title}
                author={entry5.author_name}
                date={entry5.date}
                story_id={entry5.story_id}
                rating={entry5.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry6.title}
                author={entry6.author_name}
                date={entry6.date}
                story_id={entry6.story_id}
                rating={entry6.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry7.title}
                author={entry7.author_name}
                date={entry7.date}
                story_id={entry7.story_id}
                rating={entry7.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry8.title}
                author={entry8.author_name}
                date={entry8.date}
                story_id={entry8.story_id}
                rating={entry8.rating}
              />
            </li>
            <li>
              <SuggestedStoryEntry
                title={entry9.title}
                author={entry9.author_name}
                date={entry9.date}
                story_id={entry9.story_id}
                rating={entry9.rating}
              />
            </li>
          </ol>
        </div>

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