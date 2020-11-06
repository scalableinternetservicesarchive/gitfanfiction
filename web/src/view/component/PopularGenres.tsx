
import * as React from 'react';
import { H2 } from '../../style/header';
import CategoryLists from './CategoryLists';

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

export default function PopularGenres() {
  return (
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
