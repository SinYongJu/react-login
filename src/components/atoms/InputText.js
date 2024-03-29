import React from 'react'

function InputText(props) {
  const { id, value, name, onChange, placeholder } = props
  return (
    <input
      type="text"
      id={id}
      className="inp_g"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

InputText.defaultProps = {
  id: 'inputNo',
  value: 'insert your value',
  onChange: () => {
    console.log('onChange')
  },
}

export default InputText
