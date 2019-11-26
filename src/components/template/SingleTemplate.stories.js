import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import SingleTemplate from './SingleTemplate'

import PropsNotesTable from '../../util/PropsNotesTable'
import H2 from '../atoms/H2'

const stories = storiesOf('Components|Template/SingleTemplate', module)

// stories에 추가할 info 데코레이터
const SingleTemplateInfo = {
  header: <H2>contents</H2>,
  body: <div>Login</div>,
}

// 아래에서 stories에 직접 추가할 데코레이터
const SingleTemplateDecorator = story => (
  <div style={{ margin: '10px' }}>{story()}</div>
)
// 아래에서 stories에 직접 추가할 파라미터
const SingleTemplateBackground = {
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'pink', value: '#ff00ff' },
    { name: 'black', value: '#000000' },
  ],
}

stories.addParameters({ ...SingleTemplateInfo })
stories.addParameters(SingleTemplateBackground)
stories.addDecorator(SingleTemplateDecorator)
stories.addDecorator(withKnobs)

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('default', () => <SingleTemplate />, {
  notes: PropsNotesTable(SingleTemplate),
  // SingleTemplateInfo: { ...SingleTemplateInfo },
})
