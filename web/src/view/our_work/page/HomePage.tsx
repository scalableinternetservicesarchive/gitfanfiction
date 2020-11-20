import { AppBar, Toolbar } from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { style } from '../../../style/styled'
import BranchDiagram from '../component/BranchDiagram'
import SearchBar from '../component/SearchBar'
import { AppRouteParams } from '../nav/route'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

//image
const gear = 'assets/image/webpage-general/gear.png';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomePage(props: HomePageProps) {


  return (
    <div style={styles.root}>
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
      <Columns>
        <div style={{ verticalAlign: 'middle', top: '150px' }}>
          <Column>
            <BranchDiagram />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SearchBar />
            </div>
          </Column>
        </div>
      </Columns>

    </div>
  )
}

const Columns = style('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',

})

const Column = style('div', {
  flex: '1',
  margin: '0',
  position: 'absolute',
  top: '30%',
  left: '50%',
  msTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
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

const styles = {
  root: {
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
  } as React.CSSProperties,
}