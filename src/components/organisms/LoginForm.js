import React from 'react'
import InputInfo from '../molecules/InputInfo'
import Button from '../atoms/Button'

function LoginForm(props) {
  return (
    <div>
      <InputInfo></InputInfo>
      <InputInfo></InputInfo>
      <Button>login</Button>
      <Button>sign up</Button>
    </div>
  )
}

export default LoginForm
