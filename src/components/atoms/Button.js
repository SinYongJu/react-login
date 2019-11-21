import React from 'react'

function Button(props) {
  const { themeClass, disabled, children, onClick } = props
  return (
    <button
      type="button"
      className={`btn_normal${themeClass && ' ' + themeClass}`}
      disabled={disabled && 'disabled'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  themeClass: '',
  disabled: false,
  children: 'This is Simple button',
  onClick: () => {
    console.log('click')
  },
}

export default Button
