import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import { AppRouteParams } from '../nav/route';

//image
const logo = 'assets/image/webpage-general/logo.png';
const gear = 'assets/image/webpage-general/gear.png';

const color = {
  line: "629089"
}

interface PostPageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PostPage(props: PostPageProps) {


  return (
    <>
      <Header>
        <LeftHeaderBox>
          <a href="/app/index"><img height={30} src={logo} alt="logo" /></a>
        </LeftHeaderBox>
        <MiddleHeaderBox>
          Welcome Coolguy123
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
        <TitleBox>
          place to submit title
        </TitleBox>
      </Body>
      <SidePanel>
        <BranchPanel>

        </BranchPanel>
        <NavigationPanel>
          hello
        </NavigationPanel>
      </SidePanel>
    </>
  )
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
})


const TopLine = style('div', 'ba', {
  borderWidth: "0 0 1.5 0",
  borderColor: color.line,
  margin: "0 30",
  width: 'auto',
  height: 90
})

const TitleBox = style('div', 'ba', {
  borderWidth: "0 0 1.5 0",
  borderColor: color.line,
  margin: '0 30 0 40vh',
  width: 'auto',
  height: 100
})

const SidePanel = style('div', 'fixed flex ba', {
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

