import React from 'react'
import SingleTemplate from '../template/SingleTemplate'
import H2 from '../atoms/H2'
import LoginForm from '../organisms/LoginForm'

const contents = {
  header: <H2>Login</H2>,
  body: <LoginForm />,
}

function LoginPage(props) {
  const onLoginSubmit = () => {
    console.log('click onLoginSubmit')
  }
  const onLoginCancel = () => {
    console.log('click onLoginCancel')
  }
  return (
    <React.Fragment>
      <SingleTemplate
        contents={contents}
        onLoginSubmit={onLoginSubmit}
        onLoginCancel={onLoginCancel}
      />
    </React.Fragment>
  )
}

export default LoginPage
