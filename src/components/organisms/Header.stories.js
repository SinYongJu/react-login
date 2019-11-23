import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import Header from './Header'

import { action } from '@storybook/addon-actions'
import PropsNotesTable from '../../util/PropsNotesTable'
import AppRouter from '../../core/router/AppRouter'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { LoginProvider } from '../context/LoginContext'

const stories = storiesOf('Components|Organism/Header', module)

// stories에 추가할 info 데코레이터
const HeaderInfo = {
  children: 'Header Contents Header.',
}

// 아래에서 stories에 직접 추가할 데코레이터
const HeaderDecorator = story => (
  <div style={{ margin: '10px', width: text('divWidth', '300px') }}>
    {story()}
  </div>
)
const HeaderContextDecorator = story => (
  <LoginProvider>
    <Router>
      <Route style={{ margin: '10px', width: text('divWidth', '300px') }}>
        {story()}
      </Route>
    </Router>
  </LoginProvider>
)

stories.addParameters(HeaderInfo)
stories.addDecorator(HeaderContextDecorator)

stories.addDecorator(HeaderDecorator)
stories.addDecorator(withKnobs)

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('Default', () => <Header />, {
  notes: '',
  // PropsNotesTable(Header),
})
