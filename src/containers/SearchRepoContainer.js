import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

import { getTopRepos } from 'actions/repos'
import SearchResults from 'components/SearchResults'

class SearchRepoContainer extends Component {
  static async getInitialProps ({ store, query }) {
    const lang = query.lang || 'javascript'
    await store.dispatch(getTopRepos({ lang }))
    return { lang }
  }

  componentDidMount () {
    const { getTopRepos } = this.props
    getTopRepos({ lang: 'ruby' })
  }

  render () {
    const { repos } = this.props
    return (
      <Fragment>
        <div onClick={this._goToAbout}>
          GO TO ABOUT (with <code>router</code>)
        </div>
        <SearchResults repos={repos} />
      </Fragment>
    )
  }

  _goToAbout = () => {
    this.props.router.push('/about')
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
