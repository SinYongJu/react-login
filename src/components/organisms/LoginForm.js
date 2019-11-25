import React, { useState, useEffect } from 'react'
import InputInfo from '../molecules/InputInfo'
import Button from '../atoms/Button'
import { validateInputInfo, VALIDATION_TYPE } from '../../util/validate'

const logininputTextsList = [
  {
    name: 'email',
    title: 'email',
    value: 'test@test.com',
    validate: [
      VALIDATION_TYPE.SPACE,
      VALIDATION_TYPE.SPETIAL_FIRST_CHAR,
      VALIDATION_TYPE.EMAIL,
    ],
    placeholder: 'test@test.com',
    isValid: false,
    error: '이메일의 형식으로 작성해 주세요. test@test.com',
  },
  {
    name: 'password',
    title: 'password',
    value: '12345678',
    validate: [VALIDATION_TYPE.SPACE, VALIDATION_TYPE.SPETIAL_CHAR],
    isValid: false,
    error: '8자 이상 ,특수 문자, 공백이 없도록 작성해주세요',
  },
]

const VALUE_MIN_LENGTH_8 = 7
const LOGIN_MODE = {
  INIT: 'INIT',
  INSERTING: 'INSERTING',
}

function LoginForm(props) {
  const { onLoginSubmit, onLoginCancel, onLoginSignUp, status } = props
  const [inputFormList, setInputFormList] = useState({
    inputList: logininputTextsList,
    isValid: true,
    mode: LOGIN_MODE.INIT,
  })

  const validate = () => {
    setInputFormList(ctx => {
      let isValid = ctx.inputList.reduce((prev, curr, index) => {
        ctx.inputList[index].isValid = validateInputInfo(
          curr.value,
          curr.validate,
          VALUE_MIN_LENGTH_8,
        )
        return prev && ctx.inputList[index].isValid
      }, true)
      return {
        ...ctx,
        isValid,
      }
    })
  }
  useEffect(() => {
    validate()
  }, [inputFormList.inputList, inputFormList.mode])

  const onChange = e => {
    let value = e.target.value
    let name = e.target.name
    setInputFormList(ctx => {
      if (ctx.mode === LOGIN_MODE.INIT) {
        ctx.mode = LOGIN_MODE.INSERTING
      }
      const result = ctx.inputList.findIndex(item => item.name === name)
      ctx.inputList[result].value = value
      validate()
      return { ...ctx }
    })
  }

  const onClickLogin = () => {
    onLoginSubmit(createPostBody())
  }

  const createPostBody = () => {
    const result = inputFormList.inputList.reduce((prev, curr) => {
      let { name, value } = curr
      return Object.assign(prev, { [name]: value })
    }, {})
    const { id, password, email } = result
    return {
      body: {
        id,
        password,
        email,
      },
    }
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
              status={inputFormList.mode}
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
