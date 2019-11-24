import React from 'react'
import { createContext } from 'istanbul-lib-report'
const EditContext = createContext(null)
const EditProvider = props => {
  const { children, ...rest } = props
  const value = {}
  return (
    <EditContext.EditProvider value={value} {...rest}>
      {children}
    </EditContext.EditProvider>
  )
}

export { EditContext, EditProvider }
