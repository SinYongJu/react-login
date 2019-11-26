import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import InputInfo from './InputInfo'
import { action } from '@storybook/addon-actions'
import PropsNotesTable from '../../util/PropsNotesTable'

const stories = storiesOf('Components|molecules/InputInfo', module)

// 아래에서 stories에 직접 추가할 데코레이터
const InputInfoDecorator = story => (
  <div style={{ margin: '10px' }}>{story()}</div>
)
stories.addDecorator(InputInfoDecorator)
stories.addDecorator(withKnobs)

const actions = {
  onChange: action('onChange', e => {
    console.log('text onChange')
  }),
}

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add(
  'Default',
  () => (
    <InputInfo
      id={text('id', 'insert your id')}
      value={text('value', 'insert your value')}
      title={text('title', 'insert your title')}
      isValid={boolean('isValid', true)}
      error={text('error', 'error texts texts texts')}
      onChange={actions.onChange}
    ></InputInfo>
  ),
  { notes: PropsNotesTable(InputInfo) },
)
