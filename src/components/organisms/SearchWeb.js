import React, { useState, useEffect } from 'react'
import SearchBox from '../molecules/SearchBox'
import SearchResult from '../molecules/SearchResult'

const searchBoxInfo = {
  name: 'keyword',
  title: 'keyword',
  value: '',
}

function SearchWeb(props) {
  const { result, status, onSearchFetchHandler } = props
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
  const getSearchKeyword = () => searchWebState.box.value

  const getSearchResult = () => {
    onSearchFetchHandler(getSearchKeyword())
  }
  return (
    <div>
      <SearchBox
        {...searchWebState.box}
        onChange={onChange}
        onClick={getSearchResult}
      />
      <SearchResult result={result} status={status} />
    </div>
  )
}

export default SearchWeb
