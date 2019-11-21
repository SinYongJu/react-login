import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { TEXT } from '../constants/test'
import LoginPage from '../../components/pages/LoginPage'

const Home = () => (
  <div>
    <h2>home</h2>
    <p>{TEXT}</p>
  </div>
)

function AppRouter(props) {
  const { children, ...rest } = props
  return (
    <Router>
      <header>
        <h1>REACT PRAC</h1>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/login">create</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/" exact {...rest} component={Home} />
        <Route path="/login" {...rest} component={LoginPage} />
        <Route>
          <div>404 not Found</div>
        </Route>
      </Switch>
      <footer>
        <h2>FOOTER</h2>
      </footer>
    </Router>
  )
}

export default AppRouter
