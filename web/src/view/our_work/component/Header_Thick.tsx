
import * as React from 'react';
import { style } from '../../../style/styled';

const gear = 'assets/image/webpage-general/gear.png';
const logo = 'assets/image/webpage-general/logo.png';

export default function Header_Thick() {

  return (
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
  )
}

const Header = style('header', 'absolute flex w-100', {
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