import React, { useContext } from 'react'
import SingleTemplate from '../template/SingleTemplate'
import H2 from '../atoms/H2'
import SearchWeb from '../organisms/SearchWeb'
import { SearchContext } from '../context/SearchContext'

function SearchPage(props) {
  const { fetchSearch, getSearchResult, getSearchStatus } = useContext(
    SearchContext,
  )
  const onSearchFetchHandler = value => {
    fetchSearch(value)
  }
  const contents = {
    header: <H2>Search</H2>,
    body: (
      <SearchWeb
        result={getSearchResult()}
        status={getSearchStatus()}
        onSearchFetchHandler={onSearchFetchHandler}
      />
    ),
  }

  return <SingleTemplate contents={contents} />
}

export default SearchPage
