import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import LoginForm from './LoginForm'

import { action } from '@storybook/addon-actions'
import PropsNotesTable from '../../util/PropsNotesTable'

const stories = storiesOf('Components|Organism/LoginForm', module)

// stories에 추가할 info 데코레이터
const LoginFormInfo = {
  children: 'LoginForm Contents Header.',
}

// 아래에서 stories에 직접 추가할 데코레이터
const LoginFormDecorator = story => (
  <div style={{ margin: '10px', width: text('divWidth', '300px') }}>
    {story()}
  </div>
)

stories.addParameters(LoginFormInfo)
stories.addDecorator(LoginFormDecorator)
stories.addDecorator(withKnobs)

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('Default', () => <LoginForm />, {
  notes: '',
  // PropsNotesTable(LoginForm),
})
