import React, { useContext } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import { LoginContext } from '../../components/context/LoginContext'
function PrivateRoute(props) {
  const { children, ...rest } = props
  const { isLogin } = useContext(LoginContext)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log('isLogin', isLogin())
        return isLogin() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
