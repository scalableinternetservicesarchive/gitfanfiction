
import { useMutation, useQuery } from '@apollo/client'
import { AppBar, Toolbar } from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { style } from '../../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import SearchBar2 from '../component/SearchBar2'
import { ADDCOMMENT } from '../gql/mutation'
import { fetchChapters, fetchComments } from '../gql/query'
import { AppRouteParams } from '../nav/route'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const gear = 'assets/image/webpage-general/gear.png';

export function TestPage(props: HomePageProps) {

  const [fandomId, setFandomId] = React.useState(0)
  const [postId, setPostId] = React.useState(0)
  const [chapterId, setChapterId] = React.useState(0)
  const [chapter_i, setChapter_i] = React.useState(0)
  const [comment, setComment] = React.useState("")


  const [add_comment] = useMutation(ADDCOMMENT, {
    onCompleted(data) {
      window.location.href = "index#" + fandomId + "#" + postId + "#" + chapterId;
      window.location.reload()
    }
  });

  const fetchChapterData = useQuery(fetchChapters, { variables: { postid: postId } })
  const fetchCommentData = useQuery(fetchComments, { variables: { storyId: chapterId } })
  const chapterData = fetchChapterData?.data?.getPostChapters;
  const commentData = fetchCommentData?.data?.comment;
  // console.log("comm1", chapterId, commentData)

  //before anything else, get fandom and post id if it excceeds
  React.useEffect(() => {
    const url = window.location.href.split('#')
    if (url.length < 4) return;
    const chapterID = parseInt(url[url.length - 1]);
    const postID = parseInt(url[url.length - 2]);
    const fandomID = parseInt(url[url.length - 3]);
    setFandomId(fandomID)
    setChapterId(chapterID)
    setPostId(postID)

    // setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
  }, [])


  React.useEffect((): any => {
    //sets comment id after all post data chapter data had been collected
    if (chapterData == undefined) return;
    if (chapterData == null) return;
    if (chapterData.length == 0) return;

    let sortedChapterData = [...chapterData]
    sortedChapterData.sort((a: any, b: any) => a.order - b.order)
    setChapterId(sortedChapterData[chapter_i].id)

  }, [fetchChapterData, chapter_i])

  const chapterContent = (chapterData: any) => {
    //creates chapter and comment section
    console.log("trio", fandomId, postId, chapterId);
    //valildation
    if (chapterData == undefined || chapterData == null)
      return null
    if (chapterData.length == 0)
      return null
    if (commentData == undefined || commentData == null)
      return null

    // console.log("chapterData", chapterData)
    let sortedChapterData = [...chapterData]
    sortedChapterData.sort((a: any, b: any) => a.order - b.order)
    const total_length = chapterData.length;

    console.log("comm13", chapterId, commentData)
    return (<div>

      <div style={{ height: 50, backgroundColor: "black" }} />
      <div style={{ border: "1px white solid", margin: "100px", padding: "10px", marginBottom: 30 }}>
        <h1 style={{ fontSize: 30, color: "white" }}>Title: {sortedChapterData[0].title}</h1>
        <div style={{ height: 5 }} />
        <h1 style={{ color: "white" }}>Sub Title: {sortedChapterData[chapter_i].title}</h1>
        <div style={{ height: 30 }} />
        <h1 style={{ color: "white" }}><pre>{sortedChapterData[chapter_i].body}</pre></h1>

        <div style={{ height: 30 }} />

        <span
          style={{ border: "1px white solid", padding: "2px", color: "white" }}
          onClick={() => setChapter_i((chapter_i - 1) < 0 || (chapter_i - 1) >= total_length ? chapter_i : chapter_i - 1)}>
          Back
          </span>

        <span
          style={{ border: "1px white solid", margin: "10px", padding: "2px", color: "white" }}
          onClick={() => setChapter_i((chapter_i + 1) < 0 || (chapter_i + 1) >= total_length ? chapter_i : chapter_i + 1)}>
          Next
          </span>

        <div style={{ height: 10 }} />
      </div>


      {/* comment area */}
      <div style={{ border: "1px white solid", margin: "100px", padding: "10px", marginTop: 0 }}>
        <h1 style={{ fontSize: 30, color: "white" }}>Comment:</h1>

        {commentData.map((item: any, index: any) => {
          return <h1 key={index} style={{ marginLeft: 10, fontSize: '20px', color: "white" }}>{item.body} </h1>
          {/* <button style={{ border: '1px green solid'}}
        onClick={() => vote_a_comment(vote_comment, item.id, some_user)}>{item.vote}</button> */}
        })}

        <div style={{ height: 10 }} />
        <h1 style={{ fontSize: 30, color: "white" }}>comment here:        </h1>

        <input type="text" value={comment} style={{ backgroundColor: "white", border: '1px green solid' }} onChange={(event) => setComment(event.target.value)} />

        <div style={{ height: 20 }} />
        <h1
          style={{ border: "1px white solid", padding: "2px", width: 80, color: "white", textAlign: "center" }}
          onClick={() => make_a_comment(add_comment, chapterId, comment)}>
          Submit
        </h1>


      </div>

      <div style={{ height: 10, backgroundColor: "black" }} />
    </div>);
  }


  return (
    <>
      <div className="background" style={{ ...styles.root, height: "100vh" }}>
        <AppBar style={styles.appbar} elevation={0}>
          <Toolbar style={styles.appbarWrapper}>
            <LeftHeaderBox>
              <a style={{ textDecoration: 'none', color: 'white' }} href="/app/index">git fanfiction</a>
            </LeftHeaderBox>
            <MiddleHeaderBox>
              <ButtonElements>
                <a style={{ textDecoration: 'none' }} href="/app/post"><MenuItem>Post</MenuItem></a>
              </ButtonElements>
              <ButtonElements>
                <a style={{ textDecoration: 'none' }} href="/app/request-fandom"><MenuItemRequestFandom>Request Fandom</MenuItemRequestFandom></a>
              </ButtonElements>
            </MiddleHeaderBox>
            <RightHeaderBox>
              <a style={{ textDecoration: 'none' }} href="/app/login"><MenuItem>Login</MenuItem></a>
              <a href="/app/setting">
                <img style={{ margin: '0 25' }} height={30} src={gear} alt="gear" />
              </a>
            </RightHeaderBox>
          </Toolbar>
        </AppBar>



        <div style={{ height: "80vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ height: "30vh", width: "50vw", display: "flex", flexDirection: "column" }} >
            <div style={{ flex: 1, width: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <BranchDiagram
                // width={700}
                setPostId={setPostId}
                fandomId={fandomId}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SearchBar2 width={700} setFandomId={setFandomId} />
            </div>
          </div>
        </div>


        {/* <div style={styles.main_content}>
        <div style={styles.branch}>
          <BranchDiagram width={800} height={400} />
        </div>
        <div style={styles.searchbar}>
          <SearchBar />
          <SubmitButton onClick={() => { setHeight(4000) }}>hi</SubmitButton>
        </div>
      </div> */}

      </div>

      <div style={{ backgroundColor: "black" }}>
        {chapterContent(chapterData)}
      </div>
    </>
  )
}


const make_a_comment = (add_comment: any, chapterId: Number, body: string) => {

}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'top',
    color: '#000',
    backgroundImage: "url('/app/assets/image/webpage-general/background2.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    position: 'relative',
  } as React.CSSProperties,

  branch: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -220%)',
  } as React.CSSProperties,

  searchbar: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -150%)',
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
  main_content: {
    height: "100vh"
  } as React.CSSProperties,
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

const MenuItemRequestFandom = style('div', 'ba flex', {
  borderWidth: 1.5,
  borderColor: 'white',
  width: 150,
  height: 22,
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textDecorationLine: 'none',
  fontSize: 15,
  fontWeight: 300,
  fontFamily: 'sans-serif',
})

const ButtonElements = style('div', {
  padding: '0 0 0 20',
})


// import { gql, useMutation, useQuery } from '@apollo/client'
// import { RouteComponentProps } from '@reach/router'
// import * as React from 'react'
// import { style } from '../../../style/styled'
// import BranchDiagram from '../component/BranchDiagram'
// import SearchBar from '../component/SearchBar'
// import SearchBar2 from '../component/SearchBar2'
// import { AppRouteParams } from '../nav/route'

// interface HomePageProps extends RouteComponentProps, AppRouteParams { }


// // export const fetchBranch = gql`
// //   query getBranchContext {
// //     fandom(fandomId:1){
// //       id
// //       name
// //       length
// //     }
// //     getFandomPosts (fandomId:1){
// //       id
// //       upvote
// //       length
// //     }
// //   }
// // `

// export const fetchPost = gql`
// query fetchSomePost($postid: Int!) {
//   post(postId: $postid) {
//     id
//     title
//   }
// }
// `

// export const addchapter = gql`
// mutation pleaseadd($title:String!,$length:Int!,$originDirectFromFandom:Boolean!,$postOrFandomId:Int!,$body:String!) {
//   addChapter(input:{
//     title : $title
//     length : $length
//     originDirectFromFandom : $originDirectFromFandom
//     postOrFandomId : $postOrFandomId
//     body : $body
//   }) {
//     id
//     title
//     body
//   }
// }
// `


// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export function TestPage(props: HomePageProps) {

//   // const [error, setError] = React.useState("")
//   const [field, setField] = React.useState("")
//   const [fid, setFid] = React.useState(0)
//   const [pid, setPid] = React.useState(0)


//   const { loading, data } = useQuery(fetchPost, {
//     variables: { postid: 1 },
//   })

//   const [addTodo, cc] = useMutation(addchapter);

//   const sendform = () =>
//     addTodo({
//       variables: {
//         title: "kljsfjlasfjljlk",
//         length: 5,
//         originDirectFromFandom: false,
//         postOrFandomId: 2,
//         body: "lkjsdlfkjsd"
//       }
//     });

//   if (!loading) console.log(data)
//   console.log(cc.data)

//   // const fandomId = 1
//   // fetch('/tree', {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify({ fandomId }),
//   // })
//   //   .then(async res => {
//   //     if (res.status == 200) return res.text();
//   //     const err = await res.text()
//   //     throw err;
//   //   })
//   //   .then(setError)
//   //   .catch(err => {
//   //     setError(err.toString())
//   //   })

//   //-----
//   // const options = [
//   //   { value: 'chocolate', label: 'Chocolate' },
//   //   { value: 'strawberry', label: 'Strawberry' },
//   //   { value: 'vanilla', label: 'Vanilla' },
//   //   { value: 'vanilla', label: 'Vanilla' },
//   //   { value: 'vanilla', label: 'Vanilla' },
//   //   { value: 'vanilla', label: 'Vanilla' },
//   //   { value: 'vanilla', label: 'Vanilla' },
//   //   { value: 'vanilla', label: 'Vanilla' },
//   //   { value: 'vanilla', label: 'Vanilla' }
//   // ]


//   return (
//     <div>
//       <Header>
//         <div>
//           <div>{loading ? null : data.post.title}</div>
//           <a href="/app/post">post</a>
//         </div>
//         <div>
//           <a href="/app/setting">setting</a>
//         </div>
//         <div>
//           <a href="/app/login">login</a>
//         </div>
//         <div>
//           <a href="/app/request-fandom">request fandom</a>
//         </div>
//       </Header>
//       <div>type fandom id here {pid} </div>

//       <input value={field} onChange={(event) => {
//         const a = parseInt(event.target.value)
//         if (!isNaN(a)) setFid(a)
//         setField(event.target.value);
//         if (event.target.value == "send") sendform();
//       }} />
//       <SearchBar />
//       <SearchBar2 setFandomId={(i: any) => alert("fandomID " + i)} />
//       <BranchDiagram fandomId={fid} setPostId={setPid} />
//       {/* <Button variant="primary">WowWow</Button> */}

//       <div style={{ width: 100 }}>
//         {/* <Select
//           options={options}
//           menuColor='silver'
//           onChange={(opt: any) => console.log(opt.label, opt.value)}
//         /> */}

//       </div>

//     </div>
//   )
// }

// // const customStyles = {
// //   menu: (provided: any, state: any) => ({
// //     color: state.isSelected ? 'grey' : 'black',
// //   }),
// //   control: (base: any) => ({
// //     ...base,
// //     height: 35,
// //     minHeight: 35
// //   })
// //   // singleValue: (provided:any, state:any) => {
// //   //   const opacity = state.isDisabled ? 0.5 : 1;
// //   //   const transition = 'opacity 300ms';

// //   //   return { ...provided, opacity, transition };
// //   // }
// // }

// const Header = style('div', 'w-100', {
//   height: 100,
//   backgroundColor: '#8dc9bf',
//   alignItems: 'center'
// })
