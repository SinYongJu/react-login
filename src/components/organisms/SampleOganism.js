import React, { useContext, useRef, useEffect, useCallback } from 'react'

function SampleOganism(props) {
  const { height, backgroundColor, marginBottom, children, className } = props
  return (
    <div
      className={className ? 'SampleDiv' + ' ' + className : 'SampleDiv'}
      style={{ height, backgroundColor, marginBottom }}
    >
      {children}
    </div>
  )
}

SampleOganism.defaultProps = {
  height: 500,
  // backgroundColor: '#eee',
  marginBottom: 5,
}

export default SampleOganism
