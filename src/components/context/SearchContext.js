import React, { useState, createContext } from 'react'
import { getApiSearchList } from '../../api/search_api'

export const SEARCH_STATUS = {
  PENDING: 'pending',
  INIT: 'init',
  RESULT: 'result',
}

const SearchContext = createContext(null)

const SearchProvider = props => {
  const { children, ...rest } = props
  const [searchCtx, searchSetCtx] = useState({
    status: SEARCH_STATUS.INIT,
    result: [],
  })

  const fetchSearch = value => {
    searchSetCtx(ctx => ({
      ...ctx,
      status: SEARCH_STATUS.PENDING,
    }))
    getApiSearchList(value).then(data => {
      searchSetCtx(ctx => {
        return {
          ...ctx,
          result: data,
          status: SEARCH_STATUS.RESULT,
        }
      })
    })
  }
  const getSearchResult = () => searchCtx.result
  const getSearchStatus = () => searchCtx.status
  const value = {
    fetchSearch,
    getSearchResult,
    getSearchStatus,
  }

  return (
    <SearchContext.Provider value={value} {...rest}>
      {children}
    </SearchContext.Provider>
  )
}
// const LoginConsumer = SearchContext.Consumer
export { SearchContext, SearchProvider }
