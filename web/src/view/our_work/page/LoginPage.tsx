import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { style } from '../../../style/styled';
import { UserContext } from '../../auth/user';
import Background_SideBranch from '../component/Background_SideBranch';
import Header_Thick from '../component/Header_Thick';
import { AppRouteParams } from '../nav/route';

interface LoginPageProps extends RouteComponentProps, AppRouteParams { }

const textColor = "#9fc89d"


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LoginPage(props: LoginPageProps) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //copied from prof code
  const [err, setError] = React.useState("")
  const { user } = React.useContext(UserContext)

  return (<>
    <Header_Thick />
    <Background_SideBranch />
    <Body>
      <AbsFlex>
        <ContentBox>
          {
            user
              ?
              <a href="#" onClick={() => logout(setError)}> Log Out </a>
              :
              <div>
                <PromptBox><LoginPrompt>Log In</LoginPrompt></PromptBox>
                <InputBox>
                  <div style={{ ...styles.inputField }}>
                    <div style={{ ...styles.field }}><pre>{"email : "}</pre></div>
                    <input
                      style={{ ...styles.input }}
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      onKeyDown={(event) => { if (event.key === "Enter") login(email, password, setError) }}
                    />
                  </div>
                </InputBox>
                <InputBox>
                  <div style={{ ...styles.inputField }}>
                    <div style={{ ...styles.field }}><pre>{"password : "}</pre></div>
                    <input
                      style={{ ...styles.input }}
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      onKeyDown={(event) => { if (event.key === "Enter") login(email, password, setError) }}
                    />
                  </div>
                </InputBox>
                <PromptBox>
                  <a style={{ color: textColor }} href="/app/signup">
                    <AltPrompt>Need an account?</AltPrompt>
                  </a>
                </PromptBox>
              </div>
          }
          {err}
          <h1>{user?.name} </h1>
        </ContentBox>
      </AbsFlex>
    </Body>
  </>
  )
}

function logout(setError: any) {
  return fetch('/auth/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (res.status == 200) window.location.reload()
      else throw 'invalid password / Email';
    })
    .catch(() => setError("log out Error"))
}


function login(email: string, password: string, setError: any) {
  console.log("log in attempted")
  if (email == "" || password == "") return;
  if (!validate(email, password, setError)) {
    setError('invalid email/password')
    return
  }

  fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then(res => {
      if (res.status == 200) return res.text();
      else throw 'invalid password / Email';
    })
    .then(() => window.location.href = 'index')
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
  console.log('valid', validEmail, validPassword)
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

