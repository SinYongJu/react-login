import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SEARCH_STATUS } from '../../core/constants/search/api_constants'

const SearchListItem = props => {
  const {
    item: { id, title, contents, url, datetime },
  } = props
  return (
    <li>
      <span>{id}</span>
      <a href={url}>
        <strong>{title}</strong>
        <p>{contents}</p>
      </a>
      <small>{datetime}</small>
      <div>
        <Link to={`/edit/modify/${id}`}>수정</Link>
        <Link to={`/edit/delete/${id}`}>삭제</Link>
      </div>
    </li>
  )
}

function SeachResult(props) {
  const { result, status, ...rest } = props
  if (status === SEARCH_STATUS.INIT) {
    return null
  }
  if (status === SEARCH_STATUS.RESULT && result.length === 0) {
    return <p>검색 결과가 없습니다</p>
  }

  if (status === SEARCH_STATUS.PENDING) {
    return <p>...loading</p>
  }
  return (
    <ul className="search_result_list">
      {result.map((item, index) => (
        <SearchListItem key={`search_${index}`} item={item} {...rest} />
      ))}
    </ul>
  )
}

SearchListItem.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  url: PropTypes.string,
  datetime: PropTypes.string,
}

SeachResult.propTypes = {
  result: PropTypes.array,
}
SeachResult.defaultProps = {
  result: [],
}

export default SeachResult
