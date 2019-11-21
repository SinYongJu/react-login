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

// stories에 추가할 info 데코레이터
const InputTextInfo = {
  children: 'InputText Contents Header.',
}

// 아래에서 stories에 직접 추가할 데코레이터
const InputTextDecorator = story => (
  <div style={{ margin: '10px', width: text('divWidth', '300px') }}>
    {story()}
  </div>
)
// 아래에서 stories에 직접 추가할 파라미터
const InputTextBackground = {
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'pink', value: '#ff00ff' },
    { name: 'black', value: '#000000' },
  ],
}

stories.addParameters(InputTextInfo)
stories.addDecorator(InputTextDecorator)
stories.addDecorator(withKnobs)

// stories.add('Index', () =>
//   Object.values(BUTTON_THEME).map(theme => {
//     return (
//       <>
//         <InputText theme={theme}>{theme}</InputText>
//         <br></br>
//       </>
//     )
//   }),
// )

// 질문! 처음 페이지에 띄울 때 default button이 표현되지 않는다.
stories.add('Default', () => <InputText></InputText>, {
  notes: PropsNotesTable(InputText),
})
