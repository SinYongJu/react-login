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

// 아래에서 stories에 직접 추가할 데코레이터
const H2Decorator = story => (
  <div style={{ margin: '10px', width: '300px' }}>{story()}</div>
)

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
