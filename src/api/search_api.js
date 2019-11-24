import { WEB_SEARCH_URL } from '../core/constants/search/api_constants'
import { fetchCommon } from '../util/fetch'

export const getApiSearchList = value => {
  return fetchCommon({ url: WEB_SEARCH_URL + value })
}
