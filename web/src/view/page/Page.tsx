import * as React from 'react'

export function Page(props: React.PropsWithChildren<JSX.IntrinsicElements['div']>) {
  return (
    <div className="mw8">
      {/* <NavBar /> */}
      {props.children}
    </div>
  )
}
