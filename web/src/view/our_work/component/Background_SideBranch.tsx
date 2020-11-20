
import * as React from 'react';
import { style } from '../../../style/styled';

//img src
const backgroundBranch = 'assets/image/webpage-specific/login-page/background_branch_diagram.png';

export default function Background_SideBranch() {

  return (
    <SideImageBox>
      <img style={{ maxWidth: "100%", height: "100%", marginTop: "50" }} src={backgroundBranch} alt="backgroundBranch" />
    </SideImageBox>
  )
}

const SideImageBox = style('div', 'flex', {
  // borderWidth: 1.5,
  // borderColor: 'green',
  position: "absolute",
  top: '100px',
  height: '40%',
  width: '20%',
  marginLeft: '15%',
  justifyContent: 'center'

})