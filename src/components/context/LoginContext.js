import React, { useState, createContext } from 'react'

const LOGIN_AUTH = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin',
}
const LOGIN_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAIL: 'fail',
}

const LoginContext = createContext(null)

const LoginProvider = props => {
  const { children, ...rest } = props
  const [loginStatus, setloginStatus] = useState({
    isAuth: false,
    auth: LOGIN_AUTH.GUEST,
    status: LOGIN_STATUS.PENDING,
  })

  const isLogin = () => {
    return loginStatus.isAuth
  }
  const getLoginAuth = () => {
    return loginStatus.auth
  }
  const getLoginStatus = () => {
    return loginStatus.status
  }

  const login = body => {
    console.log('loginSubmit', body)

    // 여기서 api 호출 및 콜백 처리
    setloginStatus(ctx => ({
      ...ctx,
      isAuth: true,
      auth: LOGIN_AUTH.USER,
      status: LOGIN_STATUS.SUCCESS,
    }))
  }
  const logout = () => {
    setloginStatus(ctx => ({
      ...ctx,
      isAuth: false,
      auth: LOGIN_AUTH.GUEST,
      status: LOGIN_STATUS.PENDING,
    }))
  }
  const value = {
    isLogin,
    getLoginAuth,
    getLoginStatus,
    login,
    logout,
  }
  return (
    <LoginContext.Provider value={value} {...rest}>
      {children}
    </LoginContext.Provider>
  )
}
// const LoginConsumer = LoginContext.Consumer
export { LoginContext, LoginProvider }
