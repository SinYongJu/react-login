import React, { useState, createContext, useEffect, useCallback } from 'react'
import { LOGIN_AUTH, LOGIN_STATUS } from '../../core/constants/login/constants'
import {
  login,
  checkAccessToken,
  checkRefreshToken,
  getDecodedToken,
  logout,
} from '../../api/auth'

const LoginContext = createContext(null)

const loginDefualtForm = {
  isAuth: false,
  auth: LOGIN_AUTH.GUEST,
  status: LOGIN_STATUS.PENDING,
  userinfo: {},
}
const LoginProvider = props => {
  const { children, ...rest } = props
  const [loginStatus, setloginStatus] = useState({ ...loginDefualtForm })

  const isLogin = () => {
    return loginStatus.isAuth
  }
  const getLoginAuth = () => {
    return loginStatus.auth
  }
  const getLoginStatus = () => {
    return loginStatus.status
  }

  const signIn = async body => {
    console.log('loginSubmit', body)
    const result = await login(body)

    return setloginStatus(ctx => ({
      ...ctx,
      isAuth: true,
      auth: LOGIN_AUTH.USER,
      status: LOGIN_STATUS.SUCCESS,
    }))
  }
  const signOut = () => {
    logout()
    setloginStatus(ctx => ({
      ...ctx,
      isAuth: false,
      auth: LOGIN_AUTH.GUEST,
      status: LOGIN_STATUS.PENDING,
    }))
  }

  const setUserInfoData = token => {
    // token 파싱은 auth.js 에서 수행
    // 유효성 검사까지 auth.js
    const { email } = token
    return setloginStatus(ctx => ({
      ...ctx,
      userInfo: { email },
    }))
  }
  const isExpiredToken = async () => {
    try {
      const isAccess = checkAccessToken()
      if (loginStatus.isAuth && isAccess && loginStatus.userInfo) {
        console.log('access cli')
        return setloginStatus(ctx => ({
          ...ctx,
          isAuth: true,
        }))
      }
      const isRefresh = await checkRefreshToken()
      if (isRefresh) {
        console.log('have refresh ', isRefresh)
        setUserInfoData(getDecodedToken())
        return setloginStatus(ctx => ({
          ...ctx,
          isAuth: true,
        }))
      } else {
        console.log('expired refresh')
        setUserInfoData(loginDefualtForm)
        return setloginStatus(ctx => ({
          ...ctx,
          isAuth: false,
        }))
      }
    } catch (e) {
      // 에러 핸들링, 에러에 대한 로그 처리 등
      return setloginStatus(ctx => ({
        ...ctx,
        isAuth: false,
      }))
    }
  }
  useCallback(isExpiredToken, [loginStatus.isAuth, loginStatus.userinfo])

  const value = {
    isLogin,
    getLoginAuth,
    getLoginStatus,
    signIn,
    signOut,
  }
  return (
    <LoginContext.Provider value={value} {...rest}>
      {children}
    </LoginContext.Provider>
  )
}
// const LoginConsumer = LoginContext.Consumer
export { LoginContext, LoginProvider }
