import React, { useState, useEffect } from 'react'
import InputInfo from '../molecules/InputInfo'
import Button from '../atoms/Button'
import { validateInputInfo, VALIDATION_TYPE } from '../../util/validate'

const inputTextsList = [
  {
    name: 'title',
    title: 'title',
    value: '',
    validate: [VALIDATION_TYPE.SPETIAL_FIRST_CHAR],
    isValid: false,
  },
  {
    name: 'contents',
    title: 'contents',
    value: '',
    validate: [VALIDATION_TYPE.SPETIAL_FIRST_CHAR],
    isValid: false,
  },
]
const VALUE_MIN_LENGTH_8 = 7

function EditWeb(props) {
  const { id, onClickEdit, target, onClickCancel, ...rest } = props
  const [editInputList, setEditInputList] = useState({
    inputList: inputTextsList,
    isValid: false,
    target: null,
  })
  const validate = () => {
    setEditInputList(ctx => {
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
  }, [editInputList.inputList])

  const onChange = e => {
    let value = e.target.value
    let name = e.target.name
    setEditInputList(ctx => {
      const result = ctx.inputList.findIndex(item => item.name === name)
      ctx.inputList[result].value = value
      validate()
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
    const { contents, title } = result
    return {
      id: editInputList.target && editInputList.target.id,
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
    onClickEdit(createPostBody())
  }
  return (
    <div>
      {target ? (
        <strong>id : {target.id} </strong>
      ) : (
        <strong>Create your post</strong>
      )}
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
      <Button onClick={onClickCancel}>Cancel</Button>
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
