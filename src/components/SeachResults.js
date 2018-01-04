import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const REPO_COUNT = 10
const SearchResults = ({ repos }) => {
  return (
    <Fragment>
      <h2>Top { REPO_COUNT } { repos.get('lang') } repos</h2>
      <small>{ repos.get('totalCount').toLocaleString() } found</small>
      <ul>
        {
          repos.get('items').take(REPO_COUNT).map(item => (
            <li key={item.get('id')}>
              <a href={item.get('url')} target='_blank'>
                { item.get('name') }
              </a>
            </li>
          ))
        }
      </ul>
    </Fragment>
  )
}

SearchResults.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
}

export default SearchResults
