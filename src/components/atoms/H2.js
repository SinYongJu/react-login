import React from 'react'

function H2(props) {
  const { children } = props
  return <h2>{children}</h2>
}

H2.defaultProps = {
  children: 'H2 Contents Header',
}

export default H2
