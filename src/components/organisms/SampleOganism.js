import React from 'react'

function SampleOganism(props) {
  const { height, backgroundColor, marginBottom } = props
  return <div style={{ height, backgroundColor, marginBottom }}></div>
}

SampleOganism.defaultProps = {
  height: 500,
  backgroundColor: '#eee',
  marginBottom: 5,
}

export default SampleOganism
