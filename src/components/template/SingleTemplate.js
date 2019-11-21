import React from 'react'

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
          maxWidth: 740,
          height: '50px',
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
          maxWidth: 740,
          height: '740px',
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
