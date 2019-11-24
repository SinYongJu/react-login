import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import EditWeb from './EditWeb'

import { action } from '@storybook/addon-actions'
import PropsNotesTable from '../../util/PropsNotesTable'

const stories = storiesOf('Components|Organism/EditWeb', module)

// stories에 추가할 info 데코레이터
const EditWebInfo = {
  children: 'EditWeb Contents Header.',
}

// 아래에서 stories에 직접 추가할 데코레이터
const EditWebDecorator = story => (
  <div style={{ margin: '10px', width: text('divWidth', '300px') }}>
    {story()}
  </div>
)

stories.addParameters(EditWebInfo)
stories.addDecorator(EditWebDecorator)
stories.addDecorator(withKnobs)

const actions = {
  onEditSubmit: action('onEditSubmit', () => console.log('onEditSubmit')),
  onEditSubCancel: action('onEditSubCancel', () =>
    console.log('onEditSubCancel'),
  ),
}

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('Default', () => <EditWeb {...actions} />, {
  notes: '',
  // PropsNotesTable(EditWeb),
})
