import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import { AppRouteParams } from '../nav/route';

//img src
const gear = 'assets/image/webpage-general/gear.png';
const logo = 'assets/image/webpage-general/logo.png';
const backgroundBranch = 'assets/image/webpage-specific/login-page/background-branch.png';
interface LoginPageProps extends RouteComponentProps, AppRouteParams { }

const textColor = "#9fc89d"


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignupPage(props: LoginPageProps) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  return (<>
    <Header>
      <LeftHeaderBox>
        <a href="/app/index"><img height={40} src={logo} alt="logo" /></a>
      </LeftHeaderBox>
      <RightHeaderBox>
        <a style={{ textDecoration: 'none' }} href="/app/index"><MenuItem>Main</MenuItem></a>
        <a href="/app/setting">
          <img style={{ margin: '0 25' }} height={50} src={gear} alt="gear" />
        </a>
      </RightHeaderBox>
    </Header>
    <Body>
      <AbsFlex>
        <ContentBox>
          <PromptBox><LoginPrompt>Sign Up</LoginPrompt></PromptBox>
          <InputBox>
            <div style={{ ...styles.inputField }}>
              <div style={{ ...styles.field }}><pre>{"email : "}</pre></div>
              <input style={{ ...styles.input }} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
          </InputBox>
          <InputBox>
            <div style={{ ...styles.inputField }}>
              <div style={{ ...styles.field }}><pre>{"password : "}</pre></div>
              <input style={{ ...styles.input }} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
          </InputBox>
          <PromptBox>
            <a style={{ color: textColor }} href="/app/login">
              <AltPrompt>Have an account?</AltPrompt>
            </a>
          </PromptBox>
        </ContentBox>
      </AbsFlex>
      <SideImageBox>
        <img style={{ width: "200", height: "520", marginTop: "50" }} src={backgroundBranch} alt="backgroundBranch" />
      </SideImageBox>
    </Body>
  </>
  )
}

const styles = {
  inputField: {
    display: "flex",
    flexDirection: "row" as "row",
    border: "#8dc9bf 4px solid",
    borderRadius: 10,
    paddingLeft: 10,
    height: 42,
    width: 300,
    alignItems: 'center',
    font: '18px sans-serif',
    color: '#8dc9bf'
  },
  field: {
  },
  input: {
    flex: 1,
    color: textColor,
    // border: 'black 1px solid',
  },
}

const Body = style('div', 'flex w-100 h-100', {
  // borderWidth: 2,
  // borderColor: 'red',
})
const Header = style('header', 'fixed flex w-100', {
  zIndex: 2,
  justifyContent: 'space-between',
  backgroundColor: '#94dacd',
  // borderWidth: 2,
  // borderColor: 'red',
  height: 75
})

const LeftHeaderBox = style('div', 'flex ml4 mb3', {
  // borderWidth: 2,
  // borderColor: 'green',
  alignItems: 'flex-end'

})

const RightHeaderBox = style('div', 'flex', {
  // borderWidth: 2,
  // borderColor: 'green',
  alignItems: 'center'

})

const MenuItem = style('div', 'ba flex', {
  borderWidth: 1.5,
  borderColor: 'white',
  width: 95,
  height: 35,
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textDecorationLine: 'none',
  fontSize: 20,
  fontWeight: 300,
  fontFamily: 'sans-serif',
  margin: "0 5"
})

const SideImageBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'green',
  width: 300,
  justifyContent: 'center'

})

const AbsFlex = style('div', 'flex h-100 w-100', {
  position: "fixed",
  // borderWidth: 1.5,
  // borderColor: 'pink',
  justifyContent: 'center',
})

const ContentBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'blue',
  width: 350,
  height: 250,
  marginTop: 200,
  flexDirection: "column",
})

const PromptBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'green',
  flex: 1,
})

const InputBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'yellow',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const LoginPrompt = style('div', 'flex', {
  font: "35px sans-serif",
  color: textColor,
  marginLeft: 15,
})

const AltPrompt = style('div', 'flex', {
  font: "15px sans-serif",
  color: textColor,
  marginLeft: 15,
  marginTop: 20,
})

// const Footer = style('div', 'fixed flex items-center bottom-0 w-100')

// const Hero = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
//   borderLeftColor: Colors.lemon + '!important',
//   borderRightColor: Colors.lemon + '!important',
//   borderLeftWidth: '4px',
//   borderRightWidth: '4px',
// })

