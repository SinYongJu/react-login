import React from 'react'
import InputText from '../atoms/InputText'

function InputInfo(props) {
  const { id, title, ...rest } = props
  return (
    <div className="box_tf">
      <label htmlFor={id}>{title}</label>
      <InputText id={id} {...rest} />
    </div>
  )
}

InputInfo.defaultProps = {
  id: 'myId',
  title: 'myTitle',
}

export default InputInfo
