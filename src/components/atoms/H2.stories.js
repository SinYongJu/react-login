import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
} from '@storybook/addon-knobs'
import H2 from './H2'

import { action } from '@storybook/addon-actions'
import PropsNotesTable from '../../util/PropsNotesTable'

const stories = storiesOf('Components|Atoms/H2', module)

// stories에 추가할 info 데코레이터
const H2Info = {
  children: 'H2 Contents Header.',
}

// 아래에서 stories에 직접 추가할 데코레이터
const H2Decorator = story => (
  <div style={{ margin: '10px', width: text('divWidth', '300px') }}>
    {story()}
  </div>
)
// 아래에서 stories에 직접 추가할 파라미터
const H2Background = {
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'pink', value: '#ff00ff' },
    { name: 'black', value: '#000000' },
  ],
}

stories.addParameters(H2Info)
stories.addDecorator(H2Decorator)
stories.addDecorator(withKnobs)

// stories.add('Index', () =>
//   Object.values(BUTTON_THEME).map(theme => {
//     return (
//       <>
//         <H2 theme={theme}>{theme}</H2>
//         <br></br>
//       </>
//     )
//   }),
// )

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('Theme', () => <H2>{text('children', 'H2 Contents Header.')}</H2>, {
  notes: PropsNotesTable(H2),
})
