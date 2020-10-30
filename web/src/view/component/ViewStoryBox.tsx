
import * as React from 'react';


export default function ViewStoryBox({ width = 800, height = 900 }) {

  const title = "Mocking Bird, toward the true freedom"
  const origin = "How to kill a Mocking Bird";
  const starting_point = "book 1 - chapter 3"
  const author = "sup_123"
  const chapter = 1;
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nunc ex. Proin nec arcu mi. Nulla at nibh a ligula egestas mattis. Pellentesque luctus massa at metus lobortis sagittis. Vestibulum velit nulla, aliquam eget sem id, porttitor malesuada mauris. Quisque molestie rutrum leo, vitae feugiat nibh congue vitae. Donec posuere tellus non consectetur iaculis. Suspendisse eu dictum sem.

  Vestibulum et ultrices odio. Nulla at risus et sapien malesuada gravida. Etiam sodales, libero quis porta venenatis, urna ex mollis tortor, ut vulputate magna velit sed ex. Morbi a sodales lacus. Duis tincidunt accumsan tincidunt. Nullam ligula ante, luctus quis efficitur vitae, mollis non ipsum. Nam in nunc dictum, blandit nisi sit amet, porttitor lorem. Proin sed mauris nec arcu dignissim aliquam sit amet consectetur nunc. Donec sit amet dui at elit venenatis placerat sit amet sed tortor. Etiam sed convallis nunc. Ut tempor efficitur congue. Aliquam ante orci, dignissim vel ante vitae, feugiat vulputate nulla.

  Fusce eget nunc lorem. Etiam sit amet lorem id mi tempus dapibus sit amet vitae ante. Vestibulum vitae mollis nisl. Vivamus faucibus consequat sollicitudin. Cras justo purus, pulvinar id ex vitae, feugiat tempor ipsum. Pellentesque ullamcorper mauris vel lectus iaculis, et dictum odio gravida. Morbi egestas hendrerit nunc, ac aliquet odio tristique non. Maecenas faucibus in nunc laoreet interdum. Cras a massa diam. Proin ipsum eros, ultricies at porta sed, blandit vestibulum neque. Nunc malesuada, justo dignissim hendrerit sollicitudin, ligula felis malesuada ligula, sed bibendum metus mauris at ipsum. Curabitur sit amet hendrerit mauris. Fusce eget mauris id libero pulvinar bibendum. Sed vestibulum sem purus, et ornare ipsum commodo eget. Cras bibendum velit nunc, sed lacinia elit viverra quis.

  Suspendisse ullamcorper felis a scelerisque tristique. Aliquam vitae lacus vel dui dignissim vehicula vel congue nulla. Integer sollicitudin varius ante, ut lacinia nisl consequat in. Pellentesque quis lacus eu justo egestas euismod. Sed est felis, interdum tincidunt eleifend ac, molestie sagittis augue. Vestibulum odio nibh, sollicitudin at risus eget, finibus vehicula libero. Phasellus non justo sed velit tristique tincidunt. Suspendisse iaculis neque dui, ac ullamcorper est feugiat rhoncus. Suspendisse suscipit congue urna ultricies pretium. Quisque fermentum dapibus aliquam. Fusce orci lorem, vestibulum eget vestibulum at, facilisis non purus. Aliquam pulvinar tortor et velit placerat, in ultricies ligula tempus. Sed vehicula semper rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in libero sodales, pulvinar lectus nec, tristique dolor.`

  return (
    <div style={{ ...styles.main, "width": width }}>
      <div style={{ ...styles.subcontent }}>
        <div style={{ ...styles.title }}>{"Title: " + title}</div>
        {"Author: " + author} <br />
        <span style={{ ...styles.underline }}>{"Origin: " + starting_point}</span>{" (" + origin + ")"}<br /><br />
        <div style={{ ...styles.bold }}>{"Chapter  " + chapter}</div>
      </div>
      <div style={{ ...styles.content }}>
        {"content: " + content}
      </div>
      <div style={{ ...styles.rate }}>
        <button style={{ ...styles.button }} onClick={() => { alert("upvoted!") }}>
          Rate Me!
        </button>
        {"  <"}<a style={{ ...styles.link }} href="/app/puppy">{`next chapter`}</a>{">"}
        {"  <"}<a style={{ ...styles.link }} href="/app/projects">{`prev chapter`}</a>{">"}
      </div>
    </div>
  )
}

const styles = {
  main: {
    "border": 'black 3px solid',
    "marginBottom": 30
  },
  subcontent: {
    height: 120,
    padding: 10,
    border: 'blue 1px solid'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold' as 'bold'
  },
  content: {
    padding: 10,
    border: 'blue 1px solid',
    paddingBottom: 120,
    whiteSpace: "pre-wrap" as "pre-wrap"
  },
  bold: {
    fontWeight: 'bold' as 'bold'
  },
  underline: {
    textDecorationLine: 'underline'
  },
  rate: {
    padding: 10,
    height: 50
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    color: 'white',
    height: 30,
    width: 100
  },
  link: {
    color: 'black',
  }


}