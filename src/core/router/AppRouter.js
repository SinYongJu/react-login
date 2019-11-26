import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { TEXT } from '../constants/test'
import LoginPage from '../../components/pages/LoginPage'
import { LoginProvider } from '../../components/context/LoginContext'
import PrivateRoute from './PrivateRoute'
import Header from '../../components/organisms/Header'
import SearchPage from '../../components/pages/SearchPage'
import { SearchProvider } from '../../components/context/SearchContext'
import { EditProvider } from '../../components/context/EditContext'
import EditPage from '../../components/pages/EditPage'
import SamplePage from '../../components/pages/SamplePage'
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
          <Route path="/" exact {...rest} component={SamplePage} />
          <Route path="/login" {...rest} component={LoginPage} />
          <Route path="/search">
            <SearchProvider>
              <SearchPage {...rest} />
            </SearchProvider>
          </Route>
          <PrivateRoute path={['/edit/:mode/:id', '/edit/:mode', '/create']}>
            <EditProvider>
              <EditPage {...rest} />
            </EditProvider>
          </PrivateRoute>
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
