
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import SideBar from '../component/SideBar';
import { AppRouteParams } from '../nav/route';
import BranchDiagram from '../our_work/component/BranchDiagram';
import SearchBar from '../our_work/component/SearchBar';

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ViewStoryPage(props: HomePageProps) {

  return (
    <div className="background" style={styles.root}>
      <AppBar style={styles.appbar} elevation={0}>
        <Toolbar style={styles.appbarWrapper}>
          <div style={styles.appbarTitle}>
            <a style={{ textDecoration: 'none', color: 'white' }} href="/app/index">git fanfiction</a>
          </div>
          <div style={{ color: 'white' }}>
            <SearchBar />
          </div>

          <IconButton>
            <SortIcon style={styles.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={styles.columns}>
        <div style={styles.column}>
          <div style={styles.branch}>
            <BranchDiagram width={200} height={400} />
          </div>
          <SideBar />
        </div>

        <div style={styles.column}>
          <div style={{ verticalAlign: 'middle', }}>
            <div style={styles.titlebox}>
              <h1 style={{ fontSize: '26', fontWeight: 'bold' }}>Title: To Kill a Mockingbird</h1>
              <h1>Author: coolguy_345 / Diversion: IronMan 2: 45 min</h1>

            </div>

            <div style={styles.storybox}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis aliquet purus, id pharetra metus congue et. Mauris vel bibendum nisl. Curabitur molestie felis eget dolor vulputate, vitae convallis enim bibendum. Suspendisse non porttitor lectus. Donec interdum odio sit amet quam imperdiet mattis. Fusce tincidunt lectus erat, id sagittis quam commodo vel. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mattis nulla, id pharetra enim. Duis ac posuere sapien, vel dictum justo. Vivamus vestibulum, lectus a mattis pulvinar, est enim iaculis ligula, id pulvinar purus purus eu diam.
              Vestibulum dapibus ultricies augue a malesuada. Nulla vulputate commodo ante vel facilisis. Sed posuere mauris interdum metus consectetur, et blandit nibh mattis. Pellentesque nec velit lacus. Maecenas ut lobortis leo, imperdiet egestas tellus. Praesent imperdiet eget erat id blandit. Curabitur non augue sollicitudin, venenatis lacus vitae, aliquet metus. Vestibulum varius viverra urna tincidunt luctus. Maecenas feugiat mauris eget porttitor imperdiet. Aenean dictum, est ullamcorper laoreet porttitor, sapien augue egestas orci, in fermentum nisi dolor non nunc. Nam vitae ipsum vel leo commodo elementum.
              Aenean vitae nisl</h1><br />
            </div>
          </div>

        </div>
      </div>




    </div>
  )
}

const styles = {
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
    width: '45vw',
    height: '678px',
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
