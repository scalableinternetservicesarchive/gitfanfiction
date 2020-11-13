
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import BranchDiagram from '../component/BranchDiagram'
import { AppRouteParams } from '../nav/route'
import SearchBar from '../our_work/component/SearchBar'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LandingPage(props: HomePageProps) {
  return (
    <div className="background" style={styles.root}>
      <AppBar style={styles.appbar} elevation={0}>
        <Toolbar style={styles.appbarWrapper}>
          <div style={styles.appbarTitle}>
            git fanfiction
          </div>
          <IconButton>
            <SortIcon style={styles.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div style={styles.main_content}>
        <div style={styles.branch}>
          <BranchDiagram />
        </div>
        <div style={styles.searchbar}>
          <SearchBar />
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
  } as React.CSSProperties,
}