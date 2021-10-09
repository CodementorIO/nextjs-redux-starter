import React from 'react'
import { render } from 'test-utils'
import SearchResults from 'components/SearchResults'

describe('Components/SearchResults', () => {
  let props
  beforeEach(() => {
    props = {
      language: 'lang',
      totalRepoCount: 2,
      repos: [{
        id: 1,
        name: 'repo 1',
        htmlUrl: 'url 1'
      }, {
        id: 2,
        name: 'repo 2',
        htmlUrl: 'url 2'
      }]
    }
  })

  const setup = () => {
    const utils = render(<SearchResults {...props} />)
    return utils
  }

  it('renders all items', () => {
    const utils = setup()
    props.repos.forEach((repo) => {
      expect(utils.getByText(repo.name)).toHaveAttribute(
        'href',
        repo.htmlUrl
      )
    })
  })
})
