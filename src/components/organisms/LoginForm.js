import React, { useState, useEffect } from 'react'
import InputInfo from '../molecules/InputInfo'
import Button from '../atoms/Button'

const inputTextsList = [
  {
    name: 'userId',
    title: 'ID',
    value: '',
  },
  {
    name: 'password',
    title: 'password',
    value: '',
  },
  {
    name: 'email',
    title: 'email',
    value: '',
  },
]

const validateSpace = value => {
  const spaceRegex = /\s/
  return spaceRegex.test(value)
}

const validateSpecial = value => {
  const specailRegex = /[`~!@#$%^&*|\\'";:/?]/gi
  return specailRegex.test(value)
}

/**
 *
 * @param {Array} valueArray
 */

const LOGIN_MODE = {
  INIT: 'INIT',
  INSERTING: 'INSERTING',
}

const VALUE_LENGTH = 3
const validateInputInfo = (array, compareProperty, minValueLength) => {
  const isValid = array.reduce((prev, curr) => {
    let isValid =
      !validateSpace(curr[compareProperty]) &&
      !validateSpecial(curr[compareProperty]) &&
      curr[compareProperty].length > 3
    return prev && isValid
  }, true)
  return isValid
}

function LoginForm(props) {
  const { onLoginSubmit, onLoginCancel } = props

  const [inputFormList, inputFormSetList] = useState({
    inputList: [],
    isValid: true,
    mode: LOGIN_MODE.INIT,
  })

  useEffect(() => {
    inputFormSetList(ctx => ({ ...ctx, inputList: inputTextsList }))
  }, [])

  const validate = array => {
    inputFormSetList(ctx => ({
      ...ctx,
      isValid: validateInputInfo(array, 'value', VALUE_LENGTH),
    }))
  }
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
  const buttonIsDisabled = () => {
    if (inputFormList.mode !== LOGIN_MODE.INIT) {
      return !inputFormList.isValid
    }
    return true
  }

  return (
    <div>
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
      <Button isDisabled={buttonIsDisabled()} onClick={onLoginSubmit}>
        login
      </Button>
      <Button onClick={onLoginCancel}>sign up</Button>
    </div>
  )
}

export default LoginForm
