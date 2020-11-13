
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { AppRouteParams } from '../nav/route';
import SearchBar from '../our_work/component/SearchBar';

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ViewStoryPage(props: HomePageProps) {
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
      <div style={styles.columns}>
        <div style={styles.column}>
          <div style={styles["#sidebar"]} id="sidebar">

            <ul className="nav">
              <li>
                <a style={styles["#sidebar .nav a"]} href="#">
                  <i style={styles["#sidebar .nav a i"]} className="zmdi zmdi-view-dashboard"></i> Dashboard
                </a>
              </li>
              <li>
                <a style={styles["#sidebar .nav a"]} href="#">
                  <i style={styles["#sidebar .nav a i"]} className="zmdi zmdi-link"></i> Stories
                </a>
              </li>
              <li>
                <a style={styles["#sidebar .nav a"]} href="#">
                  <i style={styles["#sidebar .nav a i"]} className="zmdi zmdi-widgets"></i> Overview
    </a>
              </li>
              <li>
                <a style={styles["#sidebar .nav a"]} href="#">
                  <i style={styles["#sidebar .nav a i"]} className="zmdi zmdi-info-outline"></i> About
    </a>
              </li>
              <li>
                <a style={styles["#sidebar .nav a"]} href="#">
                  <i style={styles["#sidebar .nav a i"]} className="zmdi zmdi-settings"></i> Services
    </a>
              </li>
              <li>
                <a style={styles["#sidebar .nav a"]} href="#">
                  <i style={styles["#sidebar .nav a i"]} className="zmdi zmdi-comment-more"></i> Contact
    </a>
              </li>
            </ul>
          </div>
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
              <h1>Aenean vitae nisl tortor. Cras pulvinar erat nec feugiat pretium. Ut vulputate rhoncus tellus quis laoreet. Cras non maximus felis. Maecenas faucibus tempus mi sit amet sollicitudin. Nam rhoncus vulputate elit. Integer gravida orci at est gravida, et feugiat diam faucibus. Maecenas congue sodales mauris. Donec molestie vestibulum venenatis. Aenean tincidunt dictum consequat. Curabitur nec pharetra velit, in ornare nulla.
              Duis tristique, odio fringilla dignissim ornare, elit lacus aliquet sem, vel laoreet lacus quam sed sem. In eget ex luctus, vestibulum magna vel, auctor neque. Cras aliquet congue lectus, sit amet pharetra enim consectetur ut. Mauris consequat lobortis urna, eu tincidunt tellus volutpat accumsan. Maecenas ac facilisis mi. Sed dictum quis urna quis iaculis. Proin tempus at sem et congue. Duis et mi eget ante vestibulum volutpat. Pellentesque vehicula, orci at tempus iaculis, metus turpis gravida dui, in tristique augue nunc in mi. Pellentesque pulvinar convallis porta.
              Proin consequat,</h1><br />
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis aliquet purus, id pharetra metus congue et. Mauris vel bibendum nisl. Curabitur molestie felis eget dolor vulputate, vitae convallis enim bibendum. Suspendisse non porttitor lectus. Donec interdum odio sit amet quam imperdiet mattis. Fusce tincidunt lectus erat, id sagittis quam commodo vel. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mattis nulla, id pharetra enim. Duis ac posuere sapien, vel dictum justo. Vivamus vestibulum, lectus a mattis pulvinar, est enim iaculis ligula, id pulvinar purus purus eu diam.
              Vestibulum dapibus ultricies augue a malesuada. Nulla vulputate commodo ante vel facilisis. Sed posuere mauris interdum metus consectetur, et blandit nibh mattis. Pellentesque nec velit lacus. Maecenas ut lobortis leo, imperdiet egestas tellus. Praesent imperdiet eget erat id blandit. Curabitur non augue sollicitudin, venenatis lacus vitae, aliquet metus. Vestibulum varius viverra urna tincidunt luctus. Maecenas feugiat mauris eget porttitor imperdiet. Aenean dictum, est ullamcorper laoreet porttitor, sapien augue egestas orci, in fermentum nisi dolor non nunc. Nam vitae ipsum vel leo commodo elementum.
              Aenean vitae nisl tortor. Cras pulvinar erat nec feugiat pretium. Ut vulputate rhoncus tellus quis laoreet. Cras non maximus felis. Maecenas faucibus tempus mi sit amet sollicitudin. Nam rhoncus vulputate elit. Integer gravida orci at est gravida, et feugiat diam faucibus. Maecenas congue sodales mauris. Donec molestie vestibulum venenatis. Aenean tincidunt dictum consequat. Curabitur nec pharetra velit, in ornare nulla.
              Duis tristique, odio fringilla dignissim ornare, elit lacus aliquet sem, vel laoreet lacus quam sed sem. In eget ex luctus, vestibulum magna vel, auctor neque. Cras aliquet congue lectus, sit amet pharetra enim consectetur ut. Mauris consequat lobortis urna, eu tincidunt tellus volutpat accumsan. Maecenas ac facilisis mi. Sed dictum quis urna quis iaculis. Proin tempus at sem et congue. Duis et mi eget ante vestibulum volutpat. Pellentesque vehicula, orci at tempus iaculis, metus turpis gravida dui, in tristique augue nunc in mi. Pellentesque pulvinar convallis porta.
              Proin consequat, diam et varius imperdiet, augue risus ornare elit, quis euismod ante purus tincidunt nunc. Nullam eu neque turpis. Ut vel ante eget neque pretium feugiat. Aenean vulputate elit ut quam eleifend fermentum. Praesent porta pretium enim, eget laoreet enim viverra vel. Etiam libero metus, dictum ut tincidunt sed, cursus et nibh. Phasellus volutpat nec nulla a ultricies. Aliquam cursus sem sed quam varius, nec imperdiet turpis mattis. Nulla facilisi. Curabitur tempor erat vel est venenatis aliquet. Maecenas id arcu blandit, dictum nisi vitae, congue nunc. In scelerisque dolor felis, in venenatis sapien congue eget. Morbi varius enim in leo aliquam accumsan. Phasellus finibus id sem in rhoncus. Donec imperdiet neque nec laoreet vulputate.
          </h1>
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
    backgroundImage: "url('/app/assets/background2.jpg')",
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
