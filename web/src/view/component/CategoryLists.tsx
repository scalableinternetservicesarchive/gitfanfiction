
import * as React from 'react';

interface EntryProp {
  entry0: string, entry1: string, entry2: string, entry3: string, entry4: string,
  entry5: string, entry6: string, entry7: string, entry8: string, entry9: string,
  entry10: string, entry11: string, entry12: string, entry13: string, entry14: string,
  entry15: string, entry16: string, entry17: string, entry18: string, entry19: string,

  entry_id0: string, entry_id1: string, entry_id2: string, entry_id3: string, entry_id4: string,
  entry_id5: string, entry_id6: string, entry_id7: string, entry_id8: string, entry_id9: string,
  entry_id10: string, entry_id11: string, entry_id12: string, entry_id13: string, entry_id14: string,
  entry_id15: string, entry_id16: string, entry_id17: string, entry_id18: string, entry_id19: string,
}

const styles = {
  basicEntry: {
    padding: '6px',
    display: 'block',
    color: 'blue',
  },
  lastEntry: {
    padding: '6px',
  },
}

export default function CategoryLists(props: EntryProp) {
  return (
    <div>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id0}>{props.entry0}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id1}>{props.entry1}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id2}>{props.entry2}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id3}>{props.entry3}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id4}>{props.entry4}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id5}>{props.entry5}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id6}>{props.entry6}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id7}>{props.entry7}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id8}>{props.entry8}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id9}>{props.entry9}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id10}>{props.entry10}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id11}>{props.entry11}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id12}>{props.entry12}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id13}>{props.entry13}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id14}>{props.entry14}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id15}>{props.entry15}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id16}>{props.entry16}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id17}>{props.entry17}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id18}>{props.entry18}</a>
      <a style={styles.basicEntry} href={'/app/' + props.entry_id19}>{props.entry19}</a>
    </div>
  )
}