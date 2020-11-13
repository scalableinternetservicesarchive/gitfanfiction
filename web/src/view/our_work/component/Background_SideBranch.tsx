
import * as React from 'react';
import { style } from '../../../style/styled';

//img src
const backgroundBranch = 'assets/image/webpage-specific/login-page/background-branch.png';

export default function Background_SideBranch() {

  return (
    <SideImageBox>
      <img style={{ width: "200", height: "520", marginTop: "50" }} src={backgroundBranch} alt="backgroundBranch" />
    </SideImageBox>
  )
}

const SideImageBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'green',
  position: "absolute",
  width: 300,
  justifyContent: 'center'

})