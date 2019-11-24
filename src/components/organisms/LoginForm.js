import React, { useState, useEffect } from 'react'
import InputInfo from '../molecules/InputInfo'
import Button from '../atoms/Button'

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

/**
 *
 * vlidation의 분리를 생각해보자!
 */
const validateSpace = value => {
  const spaceRegex = /\s/
  return spaceRegex.test(value)
}

const validateSpecial = value => {
  const specailRegex = /[`~!@#$%^&*|\\'";:/?]/gi
  return specailRegex.test(value)
}

const LOGIN_MODE = {
  INIT: 'INIT',
  INSERTING: 'INSERTING',
}

const VALUE_MIN_LENGTH_8 = 7
/**
 *
 * @param {Array} array
 * @param {string} compareProperty
 * @param {number} minValueLength
 *
 * in Array.reduce , compareProperty는 curr items's 대조군의 property
 * 이메일, 문장 작성 같은 예외 상황 애들을 처리 할 수 있도록
 * 개선이 필요하다
 */
const validateInputInfo = (array, compareProperty, minValueLength) => {
  const isValid = array.reduce((prev, curr) => {
    let isValid =
      !validateSpace(curr[compareProperty]) &&
      !validateSpecial(curr[compareProperty]) &&
      curr[compareProperty].length > minValueLength
    return prev && isValid
  }, true)
  return isValid
}

const VALUE_PROPERTY = 'value'
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
