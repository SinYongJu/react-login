import { fetchCommon, fetchCustomPOST } from '../util/fetch'

const SEARCH_URL = 'http://localhost:4444/search'

const postMakeReqUrlInOption = option => {
  return url => {
    const targetUrl = url ? SEARCH_URL + url : SEARCH_URL
    return {
      ...option,
      url: targetUrl,
    }
  }
}

const WEBPOST_FETCH_OPTION_GET_BY_ID = {
  method: 'GET',
}
export const webpostGetOptionByid = id => {
  return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_GET_BY_ID)('/' + id)
}
const WEBPOST_FETCH_OPTION_DELETE_BY_ID = {
  method: 'DELETE',
}
export const webpostDeleteOptionByid = id => {
  return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_DELETE_BY_ID)('/' + id)
}

const WEBPOST_FETCH_OPTION_UPDATE_BY_ID = {
  method: 'PUT',
  body: {},
}
export const webpostPostModify = id => {
  return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_UPDATE_BY_ID)('/' + id)
}

const WEBPOST_FETCH_OPTION_CREATE = {
  method: 'POST',
  url: postMakeReqUrlInOption(),
  body: {},
}
export const webpostPostCreate = () => {
  return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_CREATE)()
}

export const getWebPostById = async (id, success) => {
  if (!id) {
    return
  }
  try {
    const reqOption = webpostGetOptionByid(id)
    const result = await fetchCommon({ ...reqOption })
    success(result)
  } catch (error) {
    console.log(error)
  }
}
export const createWebpost = async (body, success) => {
  try {
    const reqOption = webpostPostCreate()
    const result = await fetchCustomPOST({ ...reqOption }, body)
    success(result)
  } catch (error) {
    console.log(error)
  }
}
export const modifyWebpost = async (id, body, success) => {
  try {
    const reqOption = webpostPostModify(id)
    const result = await fetchCustomPOST({ ...reqOption }, body)
    success(result)
  } catch (error) {
    console.log(error)
  }
}
export const deleteWebpost = async (id, success) => {
  if (!id) {
    return
  }
  try {
    const reqOption = webpostDeleteOptionByid(id)
    const result = await fetchCommon({ ...reqOption })
    success(result)
  } catch (error) {
    console.log(error)
  }
}
