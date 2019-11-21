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

export default SingleTemplate
