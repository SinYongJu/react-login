import React from 'react'
import SingleTemplate from '../template/SingleTemplate'
import H2 from '../atoms/H2'

const contents = {
  header: <H2>Login</H2>,
  body: <div>Login</div>,
}

function LoginPage(props) {
  return (
    <React.Fragment>
      <SingleTemplate contents={contents} />
    </React.Fragment>
  )
}

export default LoginPage
