import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { AppRouteParams } from '../nav/route';
import SearchBar from '../our_work/component/SearchBar';

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

const queryString = require('query-string');


export function SearchPage(props: HomePageProps){
  const params = queryString.parse(props.location!.search);
  // const searchFandom = gql`
  //   query searchFandoms($query:String!){
  //     searchFandom(query: $query){
  //       name
  //       author
  //     }
  //   }
  // `
  // const searchPost = gql`
  //   query searchPosts($query:String!){
  //     searchPost(query: $query){
  //       title
  //       description
  //     }
  //   }
  // `
  const query = params["query"]
  React.useEffect(() => {
    if (params['option']=="fandom"){
      fetch(`http://localhost:3000/fandom/${query}`, {
        method: "GET",
      }).then(async res => {
        if (res.status == 200) {
          return res.json();
        }
        const err = await res.json()
        throw err;
      }).then((res) => {
        document.getElementById("title")!.innerText = res[0]['name']
        document.getElementById("subtitle")!.innerText = res[0]['author']
        console.log(res)
      }).catch(err => {
        console.log(err);
      })
    } else {
      fetch(`http://localhost:3000/post/${query}`, {
        method: "GET",
      }).then(async res => {
        if (res.status == 200) {
          return res.json();
        }
        const err = await res.json()
        throw err;
      }).then((res) => {
        document.getElementById("title")!.innerText = res[0]['title']
        document.getElementById("subtitle")!.innerText = res[0]['description']
        console.log(res)
      }).catch(err => {
        console.log(err);
      })
    }
  })

  try{
    return (
      <div className="background" style={styles.root}>
        <AppBar style={styles.appbar} elevation={0}>
          <Toolbar style={styles.appbarWrapper}>
            <div style={styles.appbarTitle}>
              git fanfiction
                </div>
            <div style={{ color: 'white' }}>
              <SearchBar />
            </div>

            <IconButton>
              <SortIcon style={styles.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={styles.storybox}>
          <h1 id="title" style={{fontSize: '20px'}}>Error: search returned 0 results.</h1>
          <h2 id="subtitle" style={{fontSize: '16px'}}></h2>
        </div>
      </div>
    )
  } catch(e) {
    return (
      <div className="background" style={styles.root}>
        <AppBar style={styles.appbar} elevation={0}>
          <Toolbar style={styles.appbarWrapper}>
            <div style={styles.appbarTitle}>
              git fanfiction
                </div>
            <div style={{ color: 'white' }}>
              <SearchBar />
            </div>

            <IconButton>
              <SortIcon style={styles.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={styles.storybox}>Error: search returned 0 results.
        </div>
      </div>
    )
  }
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    color: '#000',
    backgroundImage: "url('/app/assets/background2.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    position: 'relative',
  } as React.CSSProperties,

  branch: {
    top: '130px',
    height: '400px',
    position: 'relative',
    width: '250px',
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
    position: "sticky",
    top: '130px',
    left: "250px",
    width: "250px",
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
    width: '60vw',
    padding: '15px',
    position: 'relative',
    margin: '0 auto',
    display: 'inline-block',
    top: '130px',
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px grey',
    border: '1px solid black',
    height: 'calc(100vh - 135px)',
    overflow: 'scroll',
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