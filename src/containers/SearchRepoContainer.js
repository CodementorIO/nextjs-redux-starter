import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

import config from 'config'
import { getTopRepos } from 'actions/repos'
import SearchResults from 'components/SearchResults'

class SearchRepoContainer extends Component {

  static async getInitialProps ({ store, query }) {

    let lang = query.lang || 'javascript'
    await store.dispatch(getTopRepos({ lang }))
  }

  componentDidMount() {
    let { getTopRepos } = this.props
    getTopRepos({ lang: 'ruby' })
  }

  render() {
    let { repos } = this.props
    return (
      <SearchResults repos={repos} />
    )
  }

}

function mapStateToProps (state) {
  return {
    repos: state.repos
  }
}

SearchRepoContainer.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
  getTopRepos: PropTypes.func.isRequired
}

export { SearchRepoContainer }
export default connect(mapStateToProps, {
  getTopRepos
})(SearchRepoContainer)
