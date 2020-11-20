
import { useQuery } from '@apollo/client';
import { AppBar, Toolbar } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import { UserContext } from '../../auth/user';
import BranchDiagram from '../component/BranchDiagram';
import { getPost } from '../gql/query';
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
export function PostPage(props: PostPageProps) {
  const [content, setContent] = React.useState("");
  const [postID, setPostID] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const { user } = React.useContext(UserContext);

  console.log(postID)
  //queries
  const postData = useQuery(getPost, { variables: { postid: postID } })
  // loading ? null : console.log(data.post)

  React.useEffect(() => {
    console.log("data", postData.data)
  }, [postData])



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
            <a style={{ textDecoration: 'none', color: 'white' }} href="/app/index">git fanfiction</a>
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
              /> : null}
            </BranchPanel>
          </BranchBox>

          <div style={styles["#sidebar"]} id="sidebar">
            Hello
          </div>
        </Column>

        <Column>
          <div style={{ verticalAlign: 'middle', }}>
            <div style={styles.titlebox}>
              <DeviationBox>
                {postData.data?.post?.title}
                {postData.data?.post ? <span>&nbsp;{'>>'}</span> : "place for deviation >> "}
                <span> </span>
                {postData.data?.post ? null : <input placeholder="Volume" style={{ textAlign: "center", width: 120 }} />}
                {postData.data?.post ? null : ">>"}
                <input placeholder="Chapter" style={{ width: 110, textAlign: "center" }} />
              </DeviationBox>
              <TitleBox>
                <input
                  style={{
                    "width": "100%",
                    "marginRight": 10
                  }}
                  placeholder="place to submit title" type="text" value={title}
                  onChange={(event) => setTitle(event.target.value)} />
              </TitleBox>

            </div>

            <StoryBox>
              <textarea
                ref={contentRef}
                style={styles.contentTextArea}
                value={content}
                placeholder="Type your story here..."
                onChange={(event) => setContent(event.target.value)}
              />
            </StoryBox>
          </div>

        </Column>
      </Columns>

    </div>
  )
}


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
    width: "100%"
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
    height: '7vh',
    padding: '15px',
    position: 'relative',
    top: '130px',
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px grey',
    border: '1px solid black',


  } as React.CSSProperties,

  story_info: {

  },
  columns: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  column: {
    flex: '1',
    marginRight: '40px',
  },
}
