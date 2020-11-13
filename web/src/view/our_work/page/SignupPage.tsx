import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import Background_SideBranch from '../component/Background_SideBranch';
import Header_Thick from '../component/Header_Thick';
import { AppRouteParams } from '../nav/route';

interface LoginPageProps extends RouteComponentProps, AppRouteParams { }

const textColor = "#9fc89d"


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignupPage(props: LoginPageProps) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [err, setError] = React.useState("")


  return (<>
    <Header_Thick />
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

