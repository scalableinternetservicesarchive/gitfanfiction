import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Colors } from '../../../../../common/src/colors'
import { style } from '../../../style/styled'
import { AppRouteParams } from '../nav/route'

interface LoginPageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LoginPage(props: LoginPageProps) {


  return (
    <Hero>
      loginpage
    </Hero>
  )
}

const Hero = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
  borderLeftColor: Colors.lemon + '!important',
  borderRightColor: Colors.lemon + '!important',
  borderLeftWidth: '4px',
  borderRightWidth: '4px',
})

