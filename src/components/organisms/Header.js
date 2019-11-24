import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import { LoginContext } from '../context/LoginContext'
function Header(props) {
  const { logout, isLogin, getLoginStatus } = useContext(LoginContext)
  const [headerStatus, setHeaderStatus] = useState({})
  useEffect(() => {
    setHeaderStatus(ctx => ({
      ...ctx,
      status: isLogin(),
    }))
  }, [isLogin])
  return (
    <header>
      <h1>REACT PRAC</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
        <li>
          <Link to="/edit">Edit</Link>
        </li>
      </ul>
      <>
        {headerStatus.status ? (
          <div>
            STATUS : {getLoginStatus()}
            <Button onClick={e => logout()}>Logout</Button>
          </div>
        ) : (
          ''
        )}
      </>
    </header>
  )
}

Header.defaultProps = {}

export default Header
