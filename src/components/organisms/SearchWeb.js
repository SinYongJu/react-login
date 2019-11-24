import React, { useState, useEffect } from 'react'
import SearchBox from '../molecules/SearchBox'
import SearchResult from '../molecules/SearchResult'

const searchBoxInfo = {
  name: 'keyword',
  title: 'keyword',
  value: '',
}

function SearchWeb(props) {
  const { result = [] } = props
  const [searchWebState, setSearchWebState] = useState({
    box: { ...searchBoxInfo },
  })
  useEffect(() => {}, [])
  const onChange = e => {
    let value = e.target.value
    setSearchWebState(ctx => {
      ctx.box.value = value
      return { ...ctx }
    })
  }
  return (
    <div>
      <SearchBox {...searchWebState.box} onChange={onChange} />
      <SearchResult result={result} />
    </div>
  )
}

export default SearchWeb
