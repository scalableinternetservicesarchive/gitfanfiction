
import * as React from 'react';
import { H2 } from '../../style/header';
import StoryEntry from './StoryEntry';

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

export default function TopRatedStories() {
  return (
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
