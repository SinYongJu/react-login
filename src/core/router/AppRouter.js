import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { TEXT } from '../constants/test'
import LoginPage from '../../components/pages/LoginPage'
import { LoginProvider } from '../../components/context/LoginContext'
import PrivateRoute from './PrivateRoute'
import Header from '../../components/organisms/Header'
import SearchPage from '../../components/pages/SearchPage'

const Home = () => (
  <div>
    <h2>home</h2>
    <p>{TEXT}</p>
  </div>
)

function AppRouter(props) {
  const { children, ...rest } = props
  return (
    <LoginProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact {...rest} component={Home} />
          <Route path="/login" {...rest} component={LoginPage} />
          {/* <PrivateRoute> */}
          <Route path="/Search" {...rest} component={SearchPage} />
          {/* </PrivateRoute> */}
          <Route>
            <div>404 not Found</div>
          </Route>
        </Switch>
        <footer>
          <h2>FOOTER</h2>
        </footer>
      </Router>
    </LoginProvider>
  )
}

export default AppRouter
