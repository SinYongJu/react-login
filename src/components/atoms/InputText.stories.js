import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import InputText from './InputText'
import { action } from '@storybook/addon-actions'
import PropsNotesTable from '../../util/PropsNotesTable'

const stories = storiesOf('Components|Atoms/InputText', module)

// 아래에서 stories에 직접 추가할 데코레이터
const InputTextDecorator = story => (
  <div style={{ margin: '10px', width: '300px' }}>{story()}</div>
)
stories.addDecorator(InputTextDecorator)
stories.addDecorator(withKnobs)

const InputTextInfo = {
  id: '',
  value: '',
}

const actions = {
  onChange: action('onChange', e => {
    console.log('text onChange')
  }),
}

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add(
  'Default',
  () => (
    <InputText
      id={text('id', 'idInput', InputTextInfo.id)}
      value={text('value', 'insert your value', InputTextInfo.value)}
      onChange={actions.onChange}
    ></InputText>
  ),
  {
    notes: PropsNotesTable(InputText),
  },
)
