import React from 'react'
import SingleTemplate from '../template/SingleTemplate'
import H2 from '../atoms/H2'
import SearchWeb from '../organisms/SearchWeb'

function SearchPage(props) {
  const contents = {
    header: <H2>Search</H2>,
    body: <SearchWeb />,
  }
  return <SingleTemplate contents={contents} />
}

export default SearchPage
