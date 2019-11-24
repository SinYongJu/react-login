import React, { useState, useEffect } from 'react'
import InputInfo from '../molecules/InputInfo'
import Button from '../atoms/Button'
import { validateInputInfo } from '../../util/validate'

const inputTextsList = [
  {
    name: 'userId',
    title: 'id',
    value: '12341234',
  },
  {
    name: 'password',
    title: 'password',
    value: '12341234',
  },
  {
    name: 'email',
    title: 'email',
    value: '12341234',
  },
]

const VALUE_MIN_LENGTH_8 = 7
const VALUE_PROPERTY = 'value'
const LOGIN_MODE = {
  INIT: 'INIT',
  INSERTING: 'INSERTING',
}

function LoginForm(props) {
  const { onLoginSubmit, onLoginCancel, onLoginSignUp, status } = props
  const [inputFormList, inputFormSetList] = useState({
    inputList: inputTextsList,
    isValid: true,
    mode: LOGIN_MODE.INIT,
  })

  const validate = array => {
    inputFormSetList(ctx => ({
      ...ctx,
      isValid: validateInputInfo(array, VALUE_PROPERTY, VALUE_MIN_LENGTH_8),
    }))
  }
  useEffect(() => {
    validate(inputFormList.inputList)
  }, [inputFormList.inputList, inputFormList.mode])

  const onChange = e => {
    let value = e.target.value
    let name = e.target.name
    inputFormSetList(ctx => {
      if (ctx.mode === LOGIN_MODE.INIT) {
        ctx.mode = LOGIN_MODE.INSERTING
      }
      const result = ctx.inputList.findIndex(item => item.name === name)
      ctx.inputList[result].value = value
      validate(ctx.inputList)
      return { ...ctx }
    })
  }

  const onClickLogin = () => {
    onLoginSubmit(inputFormList.isValid, inputFormList.inputList)
  }
  return (
    <div className={'LoginForm'}>
      status : {status}
      {inputFormList.inputList &&
        inputFormList.inputList.map((input, index) => {
          let id = input.name + 'Input'
          return (
            <InputInfo
              key={`${id}_${index}`}
              id={id}
              {...input}
              onChange={onChange}
            ></InputInfo>
          )
        })}
      <Button isDisabled={!inputFormList.isValid} onClick={onClickLogin}>
        login
      </Button>
      <Button onClick={onLoginSignUp}>sign up</Button>
      <Button onClick={onLoginCancel}>Cancel</Button>
    </div>
  )
}

export default LoginForm
