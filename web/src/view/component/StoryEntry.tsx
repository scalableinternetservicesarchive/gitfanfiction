
import * as React from 'react';

interface EntryProp {
  title: string;
  author: string;
  blurb: string;
  date: string;
  story_id: string;
  rating: string;
}

const styles = {
  link: {
    color: 'blue',
    fontWeight: 'bold',
  } as React.CSSProperties,
  story_entry_style: {
    padding: '6px',
    display: 'block',
    borderBottom: "1px solid black",
  },
  columns: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  story_info: {
    flex: '1',
    fontSize: '14'
  },
  rating: {
    flex: '1',
    float: 'right',
    fontWeight: 'bold'
  } as React.CSSProperties,
  date: {
    flex: '1',
    float: 'right',
    fontSize: '14',
  } as React.CSSProperties,
}

export default function StoryEntry(props: EntryProp) {
  return (
    <div className="Entry" style={styles.story_entry_style}>
      <div style={styles.columns}>
        <div className="column0" style={{ flex: '1', marginBottom: '1px', lineHeight: '1.5' }}>
          <a style={styles.link} href={'/app/' + props.story_id}>{props.title}</a>
          <div className="Entry-story-info" style={styles.story_info}>
            {props.blurb} By: <a style={styles.link} href={'/app/' + props.author}>{props.author}</a>
          </div>
        </div>
        <div className="column1">
          <div className="Entry-rating" style={styles.rating}>{props.rating}</div>
          <br />
          <div className="Entry-date" style={styles.date} >{props.date}</div>
        </div>
      </div>
    </div>
  )
}