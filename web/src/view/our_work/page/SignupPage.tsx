import { AppBar, Toolbar } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import Background_SideBranch from '../component/Background_SideBranch';
import { AppRouteParams } from '../nav/route';

interface LoginPageProps extends RouteComponentProps, AppRouteParams { }

const textColor = "#000"

//image
const gear = 'assets/image/webpage-general/gear.png';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignupPage(props: LoginPageProps) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [err, setError] = React.useState("")


  return (<>
    <Background>
      <AppBar style={styles.appbar} elevation={0}>
        <Toolbar style={styles.appbarWrapper}>
          <LeftHeaderBox>
            <a style={{ textDecoration: 'none', color: 'white' }} href="/app/index">git fanfiction</a>
          </LeftHeaderBox>
          <MiddleHeaderBox>

          </MiddleHeaderBox>
          <RightHeaderBox>
            <a style={{ textDecoration: 'none' }} href="/app/index"><MenuItem>Main</MenuItem></a>
            <a href="/app/setting">
              <img style={{ margin: '0 25' }} height={30} src={gear} alt="gear" />
            </a>
          </RightHeaderBox>
        </Toolbar>
      </AppBar>
      <Background_SideBranch />
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
            <InputBox>
              <div style={{ ...styles.inputField }}>
                <div style={{ ...styles.field }}><pre>{"name : "}</pre></div>
                <input style={{ ...styles.input }} type="text" value={name} onChange={(event) => setName(event.target.value)} />
              </div>
            </InputBox>
            <InputBox>
              <div style={{ ...styles.inputField }}>
                <div style={{ ...styles.field }}><pre>{"birthday : "}</pre></div>
                <input style={{ ...styles.input }} type="text" value={birthday} onChange={(event) => setBirthday(event.target.value)} placeholder="YYYY-MM-DD" />
              </div>
            </InputBox>
            <PromptBox>
              <a style={{ color: textColor }} href="/app/login">
                <AltPrompt>Have an account?</AltPrompt>
              </a>
            </PromptBox>
            <a href="#" onClick={() => signup({ email, password, name, birthday, setError })}> Sign Up </a>
            <div>{err}</div>
          </ContentBox>
        </AbsFlex>
      </Body>


    </Background>
  </>
  )
}

function signup({ email, password, name, birthday, setError }: any) {
  console.log("sign up attempted")
  if (email == "" || password == "" || name == "" || birthday == "") {
    setError('missing field')
    return;
  }
  if (!validate(email, password, setError)) {
    setError('invalid email')
    return
  }

  fetch('/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  })
    .then(async res => {
      if (res.status == 200) return res.text();
      const err = await res.text()
      throw err;
    })
    .then(() => window.location.href = 'login')
    .catch(err => {
      setError(err.toString())
    })
}

function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validate(
  email: string,
  password: string,
  setError: any
) {
  const validEmail = validateEmail(email)
  const validPassword = Boolean(password)
  return validEmail && validPassword
}

const styles = {
  inputField: {
    display: "flex",
    flexDirection: "row" as "row",
    border: "#000 3px solid",
    borderRadius: 10,
    paddingLeft: 10,
    height: 42,
    width: 300,
    alignItems: 'center',
    font: '18px sans-serif',
    color: '#000'
  },
  field: {

  },
  input: {
    flex: 1,
    color: textColor,
    // border: 'black 1px solid',
  },
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
}

const Background = style('div', {
  color: '#000',
  backgroundImage: "url('/app/assets/image/webpage-general/background2.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  position: 'relative',
})

const Body = style('div', {
  // borderWidth: 2,
  // borderColor: 'red',
  height: 'auto',
  width: 'auto',
  backgroundColor: 'white',
  boxShadow: '5px 5px 5px grey',
  border: '1px solid black',
})


const AbsFlex = style('div', 'flex h-100 w-100', {
  position: "fixed",
  // borderWidth: 1.5,
  // borderColor: 'pink',
  justifyContent: 'center',
})

const ContentBox = style('div', {
  // borderWidth: 1.5,
  // borderColor: 'blue',
  width: 350,
  marginTop: 200,
})

const PromptBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'green',
  height: 65,
})

const InputBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'yellow',
  height: 65,
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
