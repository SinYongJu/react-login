import React from 'react'

function PropsNotesTable(Component) {
  const defaultProps = Component.defaultProps
  const renderProps = Object.keys(defaultProps).map((key, index) => {
    const val = defaultProps[key]
    return `<tr key="${index}__${key}"><td>${key}</td><td>${val}</td></tr>`
  })

  return `<table>
    <thead>
      <tr>
        <td colspan="2" >${Component.name}</td>
      </tr>
    </thead>
    <tbody>
      ${renderProps.join('')}
    </tbody>
  </table>`
}

export default PropsNotesTable
