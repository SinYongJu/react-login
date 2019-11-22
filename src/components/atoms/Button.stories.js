import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import PropsNotesTable from '../../util/PropsNotesTable'
import { action } from '@storybook/addon-actions'
import Button, { BUTTON_THEME } from './Button'

const stories = storiesOf('Components|Atoms/Button', module)

const storyDecorator = story => (
  <div style={{ margin: '10px', width: '300px' }}>{story()}</div>
)

stories.addDecorator(storyDecorator)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    return (
      <Button
        themeClass={select('button style', BUTTON_THEME)}
        idDisabled={boolean('idDisabled', false)}
        onClick={action('onClick', console.log('onClick Event'))}
      >
        {text('buttonText', 'button')}
      </Button>
    )
  },
  {
    notes: PropsNotesTable(Button),
  },
)
