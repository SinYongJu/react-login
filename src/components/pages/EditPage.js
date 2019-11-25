import React, { useContext, useEffect } from 'react'
import SingleTemplate from '../template/SingleTemplate'
import H2 from '../atoms/H2'
import EditWeb from '../organisms/EditWeb'
import { EditContext } from '../context/EditContext'
import { useHistory } from 'react-router-dom'

function EditPage(props) {
  const { getEditCtxMode, getEditCtxTarget, onEditSubmitHandler } = useContext(
    EditContext,
  )
  const history = useHistory()
  const onClickCancel = () => {
    history.push('/')
  }
  const contents = {
    header: <H2>{getEditCtxMode()} PAGE</H2>,
    body: (
      <EditWeb
        target={getEditCtxTarget()}
        onClickEdit={onEditSubmitHandler}
        onClickCancel={onClickCancel}
      />
    ),
  }
  return (
    <>
      <SingleTemplate contents={contents} />
    </>
  )
}

export default EditPage
