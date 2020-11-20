import { AppBar, Toolbar } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import { range } from 'd3';
import * as React from 'react';
import { style } from '../../../style/styled';
import Background_SideBranch from '../component/Background_SideBranch';
import { SubmitButton } from '../component/Button';
import { AppRouteParams } from '../nav/route';

interface RequestFandomPageProps extends RouteComponentProps, AppRouteParams { }

// const textColor = "#9fc89d"
const color = {
  line: "#629089",
  panel: "#70AD47"
}

//image
const gear = 'assets/image/webpage-general/gear.png';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function RequestFandomPage(props: RequestFandomPageProps) {

  const [error, setError] = React.useState("")

  const [title, setTitle] = React.useState("")
  const [author, setAuthor] = React.useState("")
  const [genre, setGenre] = React.useState("")
  const [nbooks, setNbooks] = React.useState("")
  const [chapters, setChapters] = React.useState({})

  let isbook = null //true or false

  let howManyBookOrEpisode = null //jsx element
  if (genre.toLowerCase() === "book") {
    isbook = true
    howManyBookOrEpisode = <div>
      <QuestionSlot prompt="How many books?" value={nbooks} setValue={setNbooks} />
    </div>
  }
  else if (genre.toLowerCase() === "movie") {
    isbook = false
    howManyBookOrEpisode = <div>
      <QuestionSlot prompt="How many episodes?" value={nbooks} setValue={setNbooks} />
    </div>
  }

  let listChapter = null //jsx element
  if (!isNaN(parseInt(nbooks))) {
    listChapter = <div>
      <DivideLine />
      {
        isbook ? <Instruction> Please List Number of Chapters for each Book </Instruction>
          : <Instruction> Please Give Us Number of Minutes for each Episode </Instruction>
      }
      <NQuestion n={parseInt(nbooks)} value={chapters} setValue={setChapters} isbook={isbook} />
    </div>
  }

  //check for valid entry here. submit button only appears if all entry is valid
  let validEntry = false
  if (title !== "")
    if (author !== "")
      if (genre.toLowerCase() === "book" || genre.toLowerCase() === "movie")
        if (!isNaN(parseInt(nbooks)))
          if (Object.keys(chapters).length > 0) {
            validEntry = true
            for (const [_, value] of Object.entries(chapters) as any) {
              if (isNaN(parseInt(value))) { validEntry = false; break };
              if (parseInt(value) <= 0) { validEntry = false; break };
            }
          }

  return (<>
    <Background>
      <AppBar style={styles.appbar} elevation={0}>
        <Toolbar style={styles.appbarWrapper}>
          <LeftHeaderBox>
            <a style={{ textDecoration: 'none', color: 'white' }} href="/app/index">git fanfiction</a>
          </LeftHeaderBox>
          <MiddleHeaderBox>

          </MiddleHeaderBox>
          <RightHeaderBox>
            <a style={{ textDecoration: 'none' }} href="/app/index"><MenuItem>Main</MenuItem></a>
            <a href="/app/setting">
              <img style={{ margin: '0 25' }} height={30} src={gear} alt="gear" />
            </a>
          </RightHeaderBox>
        </Toolbar>
      </AppBar>
      <Background_SideBranch />
      <Body>
        <PushSide>
          <TopLine>
            Request Fandom:
        </TopLine>
          <QuestionBox>
            <QuestionSlot prompt="Title" value={title} setValue={setTitle} />
            <QuestionSlot prompt="Author" value={author} setValue={setAuthor} />
            <QuestionSlot prompt="Movie? Book?" value={genre} setValue={setGenre} />
            {howManyBookOrEpisode}
            {listChapter}
            {validEntry ? <SubmitButton onClick={() => sendRequest({ title, author, genre, nbooks, chapters }, setError)} /> : null}
            {error}
          </QuestionBox>
        </PushSide>
      </Body>
    </Background>
  </>
  )
}


function sendRequest({ title, author, genre, nbooks, chapters }: any, setError: any) {

  //check entry
  if (title === "") { setError("invalid title"); return; }
  if (author === "") { setError("invalid author"); return; }
  const genre_ = genre.toLowerCase()
  if (genre_ !== "book" && genre_ !== "movie") { setError("invalid genre"); return; }
  const nbooks_ = parseInt(nbooks)
  if (isNaN(nbooks_) || nbooks <= 0) { setError("invalid number of episode/books"); return; }
  const length = []
  if (Object.keys(chapters).length <= 0) { setError("invalid number of min/chapters"); return; }
  for (let i = 0; i < nbooks_; i++) {
    const value = chapters[i]
    const n_chapters = parseInt(value)
    if (isNaN(n_chapters) || n_chapters <= 0) { setError("invalid number of min/chapters"); return; }
    length.push(n_chapters)
  }

  console.log("request being made")

  fetch('/request-fandom', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author, genre: genre_, length }),
  })
    .then(res => {
      if (res.status == 200) { setError("Thank You, your request is successfully sent"); return res.text() }
      else throw 'request failed';
    })
    .catch(err => {
      setError(err.toString())
    })

}

function NQuestion(props: any) {
  const n = props.n
  const value = props.value
  const setValue = props.setValue
  const isbook = props.isbook

  // generate array of 0-n
  const ar = []
  for (let i in range(n)) ar.push(i)

  //if dictionary doesn't have correct number of states
  const a = Object.keys(value).length
  if (a != n) {
    for (let key in ar) value[key] = ""
  }

  const listItems = ar.map((i: any) =>
    <div key={i}>
      <QuestionSlot
        prompt={(isbook ? "Book " : "Episode ") + (parseInt(i) + 1)}
        value={value[i]}
        setValue={(v: any) => {
          const x = { ...value }
          x[i] = v
          setValue(x)
        }}
      />
    </div>
  );
  return (
    <div>{listItems}</div>
  );
}

function QuestionSlot(props: any) {
  const value = props.value;
  const setValue = props.setValue;
  const prompt = props.prompt;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row" as "row",
        padding: 5,
        paddingLeft: 10,
      }}>
      <div style={{
        marginRight: 5,

      }}>
        {prompt + " : "}
      </div>
      <input
        style={{
          flex: 1
        }}
        placeholder="*_________________*"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div style={{
        marginLeft: 5,
        color: "red",
      }}>
      </div>
    </div>
  )
}



const Body = style('div', 'absolute w-100', {
  top: '60px',
  marginBottom: 20,
  display: 'flex',
  justifyContent: 'center',
})

const PushSide = style('div', 'relative', {
  margin: "100 0 0 350",
})

const TopLine = style('div', 'ba', {
  borderColor: color.line,
  borderWidth: "0 0 1.5 0",
  width: "auto",
  height: 70,
  fontFamily: "sans-serif",
  padding: "20 0 0 10",
  fontSize: 30
})

const QuestionBox = style('div', 'relative', {
  padding: "40 0 0 70",
  fontFamily: "sans-serif",
  fontSize: 20
})

const DivideLine = style('div', 'ba', {
  borderColor: color.line,
  borderWidth: "0 0 1.5 0",
  width: "auto",
  fontFamily: "sans-serif",
  padding: "0 0 0 10",
  margin: "20 0 20 0"
})


const Instruction = style('div', 'relative', {
  margin: "0 0 20 0",
})

// const Footer = style('div', 'fixed flex items-center bottom-0 w-100')

// const Hero = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
//   borderLeftColor: Colors.lemon + '!important',
//   borderRightColor: Colors.lemon + '!important',
//   borderLeftWidth: '4px',
//   borderRightWidth: '4px',
// })

const Background = style('div', {
  color: '#000',
  backgroundImage: "url('/app/assets/image/webpage-general/background2.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  position: 'relative',
})

const LeftHeaderBox = style('div', 'flex ml3', {
  // borderWidth: 2,
  // borderColor: 'green',
  alignItems: 'center',
  fontFamily: 'Consolas',
  flex: '1',
  fontSize: '25',
  fontWeight: 'bold',
})

const MiddleHeaderBox = style('div', 'ba flex ml3', {
  flex: 1,
  borderWidth: "0 0 0 0",
  margin: "12 20",
  padding: "1 3",
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  font: '15px sans-serif',
  fontWeight: 100,
  color: "white",
})

const RightHeaderBox = style('div', ' flex', {
  // borderWidth: 2,
  // borderColor: 'green',
  alignItems: 'center'

})

const MenuItem = style('div', 'ba flex', {
  borderWidth: 1.5,
  borderColor: 'white',
  width: 70,
  height: 22,
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textDecorationLine: 'none',
  fontSize: 15,
  fontWeight: 300,
  fontFamily: 'sans-serif',
})

const styles = {
  appbar: {
    backgroundColor: '202020',
    fontFamily: 'Consolas',
  },
  appbarWrapper: {
    width: '80%',
    margin: '15px auto',
  },
  appbarTitle: {
    color: '#fff',
    flex: '1',
    fontSize: '25',
    fontWeight: 'bold',
  } as React.CSSProperties,
  container: {
    textAlign: 'center',
  },
}
