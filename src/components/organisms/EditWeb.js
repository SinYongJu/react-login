import React, { useState, useEffect } from 'react'
import InputInfo from '../molecules/InputInfo'
import Button from '../atoms/Button'
import { validateInputInfo } from '../../util/validate'
const inputTextsList = [
  {
    name: 'title',
    title: 'title',
    value: '12341234',
  },
  {
    name: 'contents',
    title: 'contents',
    value: '12341234',
  },
]
const VALUE_MIN_LENGTH_8 = 7
const VALUE_PROPERTY = 'value'
function EditWeb(props) {
  const {
    id,
    onClickEdit,
    target,
    onEditCancel,
    onEditSumbitHandler,
    ...rest
  } = props
  const [editInputList, setEditInputList] = useState({
    inputList: inputTextsList,
    isValid: false,
  })
  const validate = array => {
    setEditInputList(ctx => ({
      ...ctx,
      isValid: validateInputInfo(array, VALUE_PROPERTY, VALUE_MIN_LENGTH_8),
    }))
  }
  useEffect(() => {
    console.log('sdsds')
    validate(editInputList.inputList)
  }, [editInputList.inputList])

  const onChange = e => {
    let value = e.target.value
    let name = e.target.name
    setEditInputList(ctx => {
      //   if (ctx.mode === LOGIN_MODE.INIT) {
      //     ctx.mode = LOGIN_MODE.INSERTING
      //   }
      const result = ctx.inputList.findIndex(item => item.name === name)
      ctx.inputList[result].value = value
      validate(ctx.inputList)
      return { ...ctx }
    })
  }

  const setEditInputListTargetValues = target => {
    setEditInputList(ctx => {
      if (target) {
        const result = ctx.inputList.map(item => {
          return { ...item, value: target[item.name] }
        })
        ctx.inputList = result
      }
      return { ...ctx, target }
    })
  }
  useEffect(() => {
    setEditInputListTargetValues(target)
  }, [target])

  const createPostBody = () => {
    const result = editInputList.inputList.reduce((prev, curr) => {
      let { name, value } = curr
      return Object.assign(prev, { [name]: value })
    }, {})
    console.log(result)
    const { contents, title } = result
    return {
      id: editInputList.target.id,
      body: {
        datetime: new Date(
          new Date().toString().split('GMT')[0] + ' UTC',
        ).toISOString(),
        contents,
        title,
        url: 'https://namu.wiki/w/%EC%9D%B4%ED%9A%A8%EB%A6%AC',
      },
    }
  }

  const onClickSubmit = () => {
    // onEditSumbitHandler()
  }
  return (
    <div>
      <strong>id : {id}</strong>
      {editInputList.inputList &&
        editInputList.inputList.map((input, index) => {
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
      <Button isDisabled={!editInputList.isValid} onClick={onClickSubmit}>
        Submit
      </Button>
      <Button onClick={onEditCancel}>sign up</Button>
      <Button onClick={() => console.log(createPostBody())}>테숱후</Button>
    </div>
  )
}
EditWeb.defaultProps = {
  onEditSubmit: () => {
    console.log('submit handler')
  },
  onEditSubCancel: () => {
    console.log('cancel handler')
  },
}
export default EditWeb
