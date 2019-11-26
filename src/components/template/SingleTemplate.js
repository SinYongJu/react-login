import React from 'react'
import './SingleTemplate.scss'
function SingleTemplate(props) {
  const { contents } = props
  const { header, body } = contents
  return (
    <div className="single_layout">
      {header}
      {body}
    </div>
  )
}

SingleTemplate.defaultProps = {
  contents: {
    header: (
      <div
        style={{
          height: 50,
          backgroundColor: '#eee',
          margin: '5px auto',
        }}
      >
        header
      </div>
    ),
    body: (
      <div
        style={{
          height: 740,
          backgroundColor: '#eee',
          margin: '5px auto',
        }}
      >
        body
      </div>
    ),
  },
}

export default SingleTemplate
