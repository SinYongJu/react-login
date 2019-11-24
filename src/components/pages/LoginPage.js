import React, { useContext } from 'react'
import SingleTemplate from '../template/SingleTemplate'
import H2 from '../atoms/H2'
import LoginForm from '../organisms/LoginForm'
import { LoginContext } from '../context/LoginContext'
import { useHistory } from 'react-router-dom'

function LoginPage(props) {
  const { login, getLoginStatus } = useContext(LoginContext)
  const history = useHistory()
  const onLoginSubmit = (isPossible, body) => {
    console.log('click onLoginSubmit')
    return isPossible && login(body)
  }
  const onLoginSignUp = isPossible => {
    console.log('click onLoginSignUp')
    // return isPossible && Login()
  }
  const onLoginCancel = () => {
    console.log('click onLoginCancel')
    history.push('/')
  }
  const contents = {
    header: <H2>Login</H2>,
    body: (
      <LoginForm
        status={getLoginStatus()}
        onLoginSubmit={onLoginSubmit}
        onLoginCancel={onLoginCancel}
        onLoginSignUp={onLoginSignUp}
      />
    ),
  }
  return (
    <React.Fragment>
      <SingleTemplate contents={contents} />
    </React.Fragment>
  )
}

export default LoginPage
