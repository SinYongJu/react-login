import React, { useContext } from 'react'
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
import { withContexts } from '@storybook/addon-contexts/react'
import PropsNotesTable from '../../util/PropsNotesTable'
import AppRouter from '../../core/router/AppRouter'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { LoginProvider, LOGIN_STATUS } from '../context/LoginContext'
// import { LoginProvider, LoginContext } from '../context/LoginContext'

const stories = storiesOf('Components|Organism/Header', module)

// stories에 추가할 info 데코레이터
const HeaderInfo = {
  status: true,
}

// 아래에서 stories에 직접 추가할 데코레이터
const HeaderDecorator = story => (
  <div style={{ margin: '10px', width: text('divWidth', '300px') }}>
    {story()}
  </div>
)

stories.addParameters(HeaderInfo)
stories.addDecorator(HeaderDecorator)
stories.addDecorator(
  withContexts([
    {
      icon: 'globe',
      title: 'LoginProvider',
      components: [LoginProvider, Router],
      params: [
        {
          name: 'login',
          props: {
            value: {
              isLogin: () => true,
              getLoginStatus: () => LOGIN_STATUS.SUCCESS,
            },
          },
        },
        {
          name: 'logout',
          props: {
            value: {
              isLogin: () => false,
              getLoginStatus: () => LOGIN_STATUS.PENDING,
            },
          },
        },
      ],
    },
  ]),
)
stories.addDecorator(withKnobs)

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('Default', () => <Header />, {
  notes: '',
  // PropsNotesTable(Header),
  context: {},
})

export default Header.storiess
