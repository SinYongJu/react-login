import React from 'react'
import PropTypes from 'prop-types'
import Button, { BUTTON_THEME } from '../atoms/Button'
import './SearchBox.scss'
import InputText from '../atoms/InputText'

const BUTTON_TEXT = '검색'
const SearchBox = props => {
  const { id, title, onClick, ...rest } = props

  return (
    <div className="box_search">
      <label htmlFor={id}>{title}</label>
      <div className="tf_comm">
        <InputText id={id} {...rest} />
        <Button onClick={onClick}>SEARCH</Button>
      </div>
    </div>
  )
}

SearchBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  themeClass: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

SearchBox.defaultProps = {
  id: 'searchInp',
  name: 'searchKeyword',
  placeholder: 'search Keyword',
  value: '',
  themeClass: BUTTON_THEME.RED,
  onChange: () => {
    console.log('insert yout onChange eventListener')
  },
  onClick: () => {
    console.log('insert yout onClick eventListener')
  },
  onKeyDown: () => {
    console.log('insert yout onKeyDown eventListener')
  },
}

export default SearchBox
