import React, { useContext, useEffect } from 'react'
import SingleTemplate from '../template/SingleTemplate'
import H2 from '../atoms/H2'
import EditWeb from '../organisms/EditWeb'
import { EditContext } from '../context/EditContext'

function EditPage(props) {
  const { getEditCtxMode, getEditCtxTarget, onEditSubmitHandler } = useContext(
    EditContext,
  )

  const contents = {
    header: <H2>{getEditCtxMode()} PAGE</H2>,
    body: (
      <EditWeb target={getEditCtxTarget()} onClickEdit={onEditSubmitHandler} />
    ),
  }
  return (
    <>
      <SingleTemplate contents={contents} />
    </>
  )
}

export default EditPage
