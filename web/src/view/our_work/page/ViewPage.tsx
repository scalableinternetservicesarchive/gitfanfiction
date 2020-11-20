
import { useQuery } from '@apollo/client';
import { AppBar, Toolbar } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import { UserContext } from '../../auth/user';
import BranchDiagram from '../component/BranchDiagram';
import SearchBar2 from '../component/SearchBar2';
import { fetchChapters, fetchFandomData } from '../gql/query';
import { AppRouteParams } from '../nav/route';

//image
const gear = 'assets/image/webpage-general/gear.png';

const color = {
  line: "#629089",
  panel: "#70AD47"
}

// const init_content = `- background

// it was a bright morning day when all of the sudden it hit like a mad man.`

interface PostPageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ViewPage(props: PostPageProps) {
  const [content, setContent] = React.useState("");
  const [postID, setPostID] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [volume, setVolume] = React.useState(""); //
  const [chapter, setChapter] = React.useState(0); //
  const [fandomID, setFandomID] = React.useState(1); //
  const { user } = React.useContext(UserContext);
  //queries
  const chapterData = useQuery(fetchChapters, { variables: { postid: postID } })
  const fandomData = useQuery(fetchFandomData, { variables: { fandomid: fandomID } })

  // loading ? null : console.log(data.post)

  //before anything else, get post id if it excceeds
  React.useEffect(() => {
    const url = window.location.href.split('#')
    if (url.length < 3) return;
    const postID = parseInt(url[url.length - 1]);
    const fandomID = parseInt(url[url.length - 2]);
    setFandomID(fandomID)
    setPostID(postID)
  }, [])


  React.useEffect(() => {
    console.log("chapterdata", chapterData.data);
    const chapters = chapterData?.data?.getPostChapters;
    if (chapters == undefined) return;
    if (chapters?.length == 0) return;
    if (chapter >= chapters.length) { alert("end of chapter"); setChapter(0); return; };
    setContent(chapters[chapter].body);
    setTitle("Chapter " + (chapter + 1) + " of " + chapters.length + " : " + chapters[chapter].title);
    setVolume(chapterData?.data?.post.title)
  }, [chapterData, chapter])

  React.useEffect(() => {
    console.log("fandomdata", fandomData.data)
  }, [fandomData])

  const contentRef = React.useRef(null);
  const branchPanelRef = React.useRef(null);

  //resize branch panel
  const [branchPanelRefReady, setBranchPanelRefReady] = React.useState(false);
  let branchPanelHeight;
  let branchPanelWidth;
  if (branchPanelRef.current) {
    branchPanelHeight = (branchPanelRef as any).current.offsetHeight;
    branchPanelWidth = (branchPanelRef as any).current.offsetWidth;
  }
  React.useEffect(() => {
    setBranchPanelRefReady(true)
  }, [branchPanelRef, branchPanelRefReady]);
  React.useEffect(() => {
    (contentRef as any).current.style.height = "0px";
    const scrollHeight = (contentRef as any).current.scrollHeight;
    (contentRef as any).current.style.height = scrollHeight + "px";
  }, [content]);



  //allows tabs
  React.useEffect(() => {
    const CR = (contentRef as any).current;
    CR.onkeydown = function (e: any) {
      if (e.key == 'Tab') {
        e.preventDefault();
        var s = CR.selectionStart;
        CR.value = CR.value.substring(0, CR.selectionStart) + "\t" + CR.value.substring(CR.selectionEnd);
        CR.selectionEnd = s + 1;
      }
    }
  }, [])

  return (
    <div style={styles.root}>
      <AppBar style={styles.appbar} elevation={0}>
        <Toolbar style={styles.appbarWrapper}>
          <LeftHeaderBox>
            <a style={{ textDecoration: 'none', color: 'white', marginRight: 20 }} href="/app/index">git fanfiction</a>
            <SearchBar2
              width={300}
              height={22}
              fontSize={15}
              setFandomId={setFandomID}
            />
          </LeftHeaderBox>
          <MiddleHeaderBox>
            Welcome {user?.name}
          </MiddleHeaderBox>
          <RightHeaderBox>
            <a style={{ textDecoration: 'none' }} href="/app/index"><MenuItem>Main</MenuItem></a>
            <a href="/app/setting">
              <img style={{ margin: '0 25' }} height={30} src={gear} alt="gear" />
            </a>
          </RightHeaderBox>
        </Toolbar>
      </AppBar>


      <Columns>
        <Column>
          <BranchBox>
            <BranchPanel ref={branchPanelRef}>
              {branchPanelRefReady ? <BranchDiagram
                height={branchPanelHeight}
                width={branchPanelWidth}
                setPostId={setPostID}
                fandomId={fandomID}
              /> : null}
            </BranchPanel>
          </BranchBox>

          <div style={styles["#sidebar"]} id="sidebar">
            <div>Hello</div>
            <a href={"/app/post#" + fandomID + "#" + postID}> create new post from this story </a>
          </div>
        </Column>

        <Column>
          <div style={{ verticalAlign: 'middle', }}>
            <div style={styles.titlebox}>
              <DeviationBox>
                {volume}
              </DeviationBox>
              <TitleBox>
                <input
                  style={{
                    "width": "100%",
                    "marginRight": 10
                  }}
                  readOnly
                  placeholder="please select a post..." type="text" value={title} />
              </TitleBox>

            </div>

            <StoryBox>
              <textarea
                ref={contentRef}
                style={styles.contentTextArea}
                value={content}
                readOnly
                placeholder="No Content..."
              />
            </StoryBox>

            <div>
              <SubmitButton onClick={() => {
                if (chapterData?.data?.getPostChapters.length) setChapter(chapter + 1)
                else setChapter(0)
                console.log("submit pressed", chapter)
              }}>Next Chapter</SubmitButton>


            </div>

          </div>

        </Column>
      </Columns>

    </div>

  )
}


// const OnExtend = (add_new_chapter: any, onFandom: Boolean, user: any, fandomData: any, postData: any, content: string, title: string, volume: string, chapter: string) => {

//   console.log("postData", postData);
//   console.log("fandomData", fandomData);
//   console.log("content", content);
//   console.log("title", title);
//   console.log("user", user);
//   console.log("volume", volume);
//   console.log("chapter", chapter);


//   const content_length = 1500;

//   //do we even have post data?
//   if (postData?.data?.post == null) { alert("post not selected"); return; }
//   if (title == "") { alert("Cannot Submit with empty title"); return; }

//   add_new_chapter({
//     variables: {
//       title: title,
//       originDirectFromFandom: false,
//       body: content,
//       postOrFandomId: postData.data.post.id,
//       length: content_length
//     }
//   })

//   alert("submitted successfully");
// }

// make_new_post({
//   variables: {
//     title: title,
//     description: description,
//     body: content,
//     length: content_length,
//     originDirectFromFandom: false,
//     origin: origin,
//     ancestor: ancestor,
//     father: father,
//     fatherIndex: fatherIndex
//   }
// })

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
  borderWidth: "0 0 1.5 0",
  margin: "12 20",
  padding: "1 3",
  borderBottomColor: 'white',
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

const DeviationBox = style('div', 'flex', {
  marginBottom: 5,
  fontSize: 30
})

const TitleBox = style('div', 'flex', {
  fontSize: 20
})

const SubmitButton = style('div', {
  width: '150px',
  padding: '15px',
  position: 'relative',
  margin: '0 auto',
  display: 'flex',
  float: 'right',
  top: '160px',
  fontFamily: 'Consolas',

  textDecoration: "none",
  border: '2px solid white',
  borderRadius: "4px",
  boxShadow: "0px 4px 30px -6px rgba(36, 52, 70, 0.65)",
  background: "#24292e",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  textAlign: "center",
  justifyContent: 'center',
  alignItems: 'center',
  transition: "all .3s ease-in-out"
})

// const RightContextBox = style('div', ' flex h-100', {
//   width: 200
// })



// const ContentBox = style('div', 'ba', {
//   border: "0 " + color.panel + " solid",
//   borderWidth: "0 0 0 3",
//   margin: '30 30 0 42vh',
//   minHeight: "100px",
//   width: "auto"
// })

// const SidePanel = style('div', 'fixed flex', {
//   top: 100,
//   left: 20,
//   height: "75vh",
//   width: "35vh",
//   flexDirection: 'column',
//   alignItems: 'center',
// })

const BranchPanel = style('div', ' ba', {
  borderWidth: "0 0 1.5 0",
  borderColor: color.line,
  height: "18vh",
  width: "32vh",
})

const BranchBox = style('div', {
  top: '130px',
  position: 'relative',
  height: "18vh",
  width: "32vh",
  overflow: 'hidden',
  background: "#fff",
  boxShadow: '5px 5px 5px grey',
  border: '1px solid black',
})

const StoryBox = style('div', {
  width: '45vw',
  height: 'auto',
  minHeight: '440px',
  minWidth: '800px',
  padding: '15px',
  position: 'relative',
  margin: '0 auto',
  display: 'inline-block',
  top: '130px',
  backgroundColor: 'white',
  boxShadow: '5px 5px 5px grey',
  border: '1px solid black',
})

const Columns = style('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
})

const Column = style('div', {
  flex: '1',
  marginRight: '40px',
})

const styles = {
  contentTextArea: {
    padding: 10,
    width: "100%",
    minHeight: '400px',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    color: '#000',
    backgroundImage: "url('/app/assets/image/webpage-general/background2.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    position: 'relative',
  } as React.CSSProperties,

  branch: {
    top: '130px',
    position: 'relative',
    height: "18vh",
    width: "32vh",
    overflow: 'hidden',
    background: "#fff",
    boxShadow: '5px 5px 5px grey',
    border: '1px solid black',
  } as React.CSSProperties,

  searchbar: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -190%)',
  } as React.CSSProperties,

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
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  iconDown: {
    color: '#000',
    fontSize: '4rem',
  },


  body: {
    overflowX: "hidden",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px"
  },

  "#viewport": {
    paddingLeft: "250px",
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
    OTransition: "all 0.5s ease",
    transition: "all 0.5s ease"
  },

  "#content": {
    width: "100%",
    position: "relative",
    marginRight: "0"
  } as React.CSSProperties,

  "#sidebar": {
    zIndex: 1000,
    position: 'relative',
    top: '175px',
    width: "32vh",
    height: "250px",
    marginLeft: "0px",
    overflowY: "auto",
    background: "#fff",
    boxShadow: '5px 5px 5px grey',
    border: '1px solid black',
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
    OTransition: "all 0.5s ease",
    transition: "all 0.5s ease",
  } as React.CSSProperties,

  "#sidebar header": {
    backgroundColor: "#263238",
    fontSize: "20px",
    lineHeight: "52px",
    textAlign: "center"
  } as React.CSSProperties,

  "#sidebar header a": {
    color: "#fff",
    display: "block",
    textDecoration: "none"
  } as React.CSSProperties,

  "#sidebar header a:hover": { color: "#fff" },
  "#sidebar .nav": {},
  "#sidebar .nav a": {
    background: "none",
    borderBottom: "1px solid #455A64",
    color: "#CFD8DC",
    fontSize: "14px",
    padding: "16px 24px"
  },

  "#sidebar .nav a:hover": { background: "none", color: "#ECEFF1" },
  "#sidebar .nav a i": { marginRight: "16px" },

  storybox: {
    width: '45vw',
    height: 'auto',
    minHeight: '250px',
    minWidth: '500px',
    padding: '15px',
    position: 'relative',
    margin: '0 auto',
    display: 'inline-block',
    top: '130px',
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px grey',
    border: '1px solid black',


  } as React.CSSProperties,

  titlebox: {
    width: '45vw',
    height: '100px',
    minWidth: '800px',
    padding: '15px',
    position: 'relative',
    top: '130px',
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px grey',
    border: '1px solid black',


  } as React.CSSProperties,
}
