import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import { LoginContext } from '../context/LoginContext'
function Header(props) {
  const { signOut, isLogin, getLoginStatus } = useContext(LoginContext)
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
      <>
        {headerStatus.status ? (
          <div>
            STATUS : {getLoginStatus()}
            <Button onClick={signOut}>Logout</Button>
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
