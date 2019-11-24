import React, { createContext, useState, useEffect } from 'react'
import { EDIT_PAGE_MODE } from '../../core/constants/edit/constants'
import { useParams, useHistory } from 'react-router-dom'
import { getWebPostById, createWebpost } from '../../api/editapi'
const EditContext = createContext(null)

const EditProvider = props => {
  const { children, ...rest } = props
  let { mode, id } = useParams()
  const history = useHistory()
  const setEditCtxMode = mode => {
    return mode ? EDIT_PAGE_MODE[mode.toUpperCase()] : EDIT_PAGE_MODE.CREATE
  }
  const [editCtx, setEditCtx] = useState({
    mode: EDIT_PAGE_MODE.CREATE,
    target: null,
  })
  useEffect(() => {
    getWebPostById(id, data => {
      setEditCtx(ctx => {
        if (id) {
          ctx.target = data
        }
        return {
          ...ctx,
          mode: setEditCtxMode(mode),
        }
      })
    })
  }, [id, mode])
  const getEditCtxMode = () => editCtx.mode
  const getEditCtxTarget = () => editCtx.target
  const onEditSumbitHandler = mode => {
    switch (mode) {
      case EDIT_PAGE_MODE.CREATE:
        return param => {
          const { body } = param
          createWebpost(body, () => {
            history.push('/')
          })
        }
      case EDIT_PAGE_MODE.MODIFY:
        return param => {
          const { body } = param
        }
      case EDIT_PAGE_MODE.DELETE:
        return param => {
          const { id } = param
        }
      default:
        return () => {
          console.log('Edit page Api func')
        }
    }
  }
  const value = {
    getEditCtxMode,
    getEditCtxTarget,
    onEditSumbitHandler,
  }
  return (
    <EditContext.Provider value={value} {...rest}>
      {children}
    </EditContext.Provider>
  )
}

export { EditContext, EditProvider }
