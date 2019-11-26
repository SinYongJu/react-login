import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import SearchWeb from './SearchWeb'

import { action } from '@storybook/addon-actions'
import PropsNotesTable from '../../util/PropsNotesTable'

const stories = storiesOf('Components|Organism/SearchWeb', module)

// stories에 추가할 info 데코레이터
const SearchWebInfo = {
  children: 'SearchWeb Contents Header.',
}

// 아래에서 stories에 직접 추가할 데코레이터
const SearchWebDecorator = story => (
  <div style={{ margin: '10px' }}>{story()}</div>
)

stories.addParameters(SearchWebInfo)
stories.addDecorator(SearchWebDecorator)
stories.addDecorator(withKnobs)

const actions = {
  onLoginSubmit: action('onLoginSubmit', () => console.log('onLoginSubmit')),
  onLoginCancel: action('onLoginCancel', () => console.log('onLoginCancel')),
  onLoginSignUp: action('onLoginCancel', () => console.log('onLoginCancel')),
}

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('Default', () => <SearchWeb {...actions} />, {
  notes: '',
  // PropsNotesTable(SearchWeb),
})

stories.add('Default--No result', () => <SearchWeb {...actions} />, {
  //   notes: PropsNotesTable(SearchWeb),
  // ,
})
