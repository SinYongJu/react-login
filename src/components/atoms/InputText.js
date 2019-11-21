import React from 'react'

function InputText(props) {
  const { id, value, onChange } = props
  return <input type="text" id={id} value={value} onChange={onChange} />
}

InputText.defaultProps = {
  id: 'inputNo',
  value: 'insert your value',
  onChange: () => {
    console.log('onChange')
  },
}

export default InputText
