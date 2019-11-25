const fetchCheckResponseStatus = async res => {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    return new Error(res.statusText)
  }
}
export const fetchCustomPOST = (option, body) => {
  const reqOption = {
    ...option,
    body: JSON.stringify(body),
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  }
  return fetchCommon(reqOption)
}

export const fetchCommon = async option => {
  const { url, ...rest } = option
  const res = await fetch(url, { ...rest })
  const result = await fetchCheckResponseStatus(res)
  const data = await result.json()
  return data
}
