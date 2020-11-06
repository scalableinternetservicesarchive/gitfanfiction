
import * as React from 'react';
import { H2 } from '../../style/header';
import CategoryLists from './CategoryLists';

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

export default function FeaturedFandoms() {
  return (
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
