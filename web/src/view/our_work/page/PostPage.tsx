
import { useMutation, useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import { UserContext } from '../../auth/user';
import BranchDiagram from '../component/BranchDiagram';
import { SubmitButton } from '../component/Button';
import { MAKENEWPOST } from '../gql/mutation';
import { fetchPostPageData } from '../gql/query';
import { AppRouteParams } from '../nav/route';


//image
const logo = 'assets/image/webpage-general/logo.png';
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
  const [volume, setVolume] = React.useState("");
  const [chapter, setChapter] = React.useState("");
  const { user } = React.useContext(UserContext);

  console.log(postID)
  //queries
  const postData = useQuery(fetchPostPageData, { variables: { postid: postID } })
  const [make_new_post, mutData] = useMutation(MAKENEWPOST);
  // loading ? null : console.log(data.post)
  console.log("mudata", mutData);
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
    <>
      <Header>
        <LeftHeaderBox>
          <a href="/app/index"><img height={30} src={logo} alt="logo" /></a>
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
      </Header>
      <Body>
        <TopLine />
        <ContextBox>
          <LeftContextBox>
            <DeviationBox>
              {postData.data?.post?.title}
              {postData.data?.post ? <span>&nbsp;{'>>'}</span> : "place for deviation >> "}
              <span> </span>
              {postData.data?.post ? null :
                <input placeholder="Volume" style={{ textAlign: "center", width: 120 }}
                  value={volume} onChange={(event) => setVolume(event.target.value)}
                />}
              {postData.data?.post ? null : ">>"}
              <input placeholder="Chapter" style={{ width: 110, textAlign: "center" }}
                value={chapter} onChange={(event) => setChapter(event.target.value)}
              />
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
          </LeftContextBox>
          <RightContextBox>
            <SubmitButton onClick={() => OnSubmit(make_new_post, user, postData, content, title, volume, chapter)} />
          </RightContextBox>
        </ContextBox>
        <ContentBox>
          <textarea
            ref={contentRef}
            style={styles.contentTextArea}
            value={content}
            placeholder="Type your story here..."
            onChange={(event) => setContent(event.target.value)}
          />
        </ContentBox>
      </Body>
      <SidePanel>
        <BranchPanel ref={branchPanelRef}>
          {branchPanelRefReady ? <BranchDiagram
            height={branchPanelHeight}
            width={branchPanelWidth}
            setPostId={setPostID}
          /> : null}
        </BranchPanel>
        <NavigationPanel>
          hello
        </NavigationPanel>
      </SidePanel>
    </>
  )
}


const OnSubmit = (make_new_post: any, user: any, postData: any, content: string, title: string, volume: string, chapter: string) => {

  console.log("postData", postData);
  console.log("content", content);
  console.log("title", title);
  console.log("user", user);
  console.log("volume", volume);
  console.log("chapter", chapter);


  if (postData?.data?.post == null) { alert("PostData not fetched"); return; }

  // bound check
  const length = postData.data.post.length.split(",").length
  console.log(length)
  const chapter_int = parseInt(chapter);
  if (isNaN(chapter_int)) { alert("Invalid Chapter number"); return; }
  if (chapter_int > length) { alert("the deviation you are writing from has " + length + " chapters. Your chapter starting point (" + chapter_int + ") excceed that length\n"); return; }
  if (chapter_int <= 0) { alert("Invalid Chapter Number\n"); return; }
  if (title == "") { alert("Cannot Submit with empty title"); return; }

  //prepare necessary variables
  const ancestor = postData.data.post.ancestor;
  const father = postData.data.post.id;
  const fatherIndex = "0," + chapter;
  // // const title = title;
  const origin = postData.data.post.origin.id;
  const description = content;
  //set content length
  const content_length = 900;

  make_new_post({
    variables: {
      title: title,
      description: description,
      body: content,
      length: content_length,
      originDirectFromFandom: false,
      origin: origin,
      ancestor: ancestor,
      father: father,
      fatherIndex: fatherIndex
    }
  })

  alert("submitted successfully");
}


const styles = {
  contentTextArea: {
    padding: 10,
    width: "100%"
  }
}

const Header = style('header', 'flex w-100', {
  zIndex: 2,
  position: "fixed",
  backgroundColor: '#8dc9bf',
  // borderWidth: 2,
  // borderColor: 'red',
  height: 45
})

const LeftHeaderBox = style('div', 'flex ml3', {
  // borderWidth: 2,
  // borderColor: 'green',
  alignItems: 'center'
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

const Body = style('div', ' w-100', {
  marginBottom: 20
})


const TopLine = style('div', 'ba', {
  borderWidth: "0 0 1.5 0",
  borderColor: color.line,
  margin: "0 30",
  width: 'auto',
  height: 90
})

const ContextBox = style('div', 'ba flex', {
  borderWidth: "0 0 1.5 0",
  borderColor: color.line,
  margin: '0 30 0 40vh',
  padding: 10,
  width: 'auto',
  height: 100
})

const LeftContextBox = style('div', 'flex h-100', {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-end",
})

const DeviationBox = style('div', 'flex', {
  marginBottom: 5,
  fontSize: 30
})

const TitleBox = style('div', 'flex', {
  fontSize: 20
})

const RightContextBox = style('div', ' flex h-100', {
  width: 200
})



const ContentBox = style('div', 'ba', {
  border: "0 " + color.panel + " solid",
  borderWidth: "0 0 0 3",
  margin: '30 30 0 42vh',
  minHeight: "100px",
  width: "auto"
})

const SidePanel = style('div', 'fixed flex', {
  top: 100,
  left: 20,
  height: "75vh",
  width: "35vh",
  flexDirection: 'column',
  alignItems: 'center',
})

const BranchPanel = style('div', ' ba', {
  borderWidth: "0 0 1.5 0",
  borderColor: color.line,
  height: "18vh",
  width: "32vh",
})

const NavigationPanel = style('div', ' ba', {
  marginTop: 20,
  borderColor: color.line,
  height: "50vh",
  width: "32vh",
})

