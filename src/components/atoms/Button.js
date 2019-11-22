import React from 'react'
import './Button.scss'
export const BUTTON_THEME = {
  DEFAULT: 'btn_normal',
  RED: 'btn_red',
  BORDER_NONE: 'btn_border_none',
}

function Button(props) {
  const { themeClass, isDisabled, children, style, onClick } = props
  return (
    <button
      type="button"
      className={
        themeClass && themeClass !== BUTTON_THEME.DEFAULT
          ? `${BUTTON_THEME.DEFAULT} ${themeClass}`
          : BUTTON_THEME.DEFAULT
      }
      disabled={isDisabled && 'disabled'}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  themeClass: BUTTON_THEME.DEFAULT,
  isDisabled: false,
  children: 'This is Simple button',
  onClick: () => {
    console.log('click')
  },
  style: null,
}

export default Button
