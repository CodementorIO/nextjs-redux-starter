import React from 'react'
import PropTypes from 'prop-types'
import styles from 'styles/SearchResults.css'

const REPO_COUNT = 10
const SearchResults = ({ repos }) => {
  return (
    <div className='container'>
      <h2>Top { REPO_COUNT } { repos.get('lang') } repos</h2>
      <small>{ repos.get('totalCount').toLocaleString() } repos found</small>
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
      <style jsx>{styles}</style>
    </div>
  )
}

SearchResults.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
}

export default SearchResults
