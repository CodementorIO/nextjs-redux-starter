import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  background: #eee;
  padding: 4px 12px;
  :hover {
    a {
      color: #eee;
    }
    background: ${props => props.theme.colors.primary};
  }
`

const REPO_COUNT = 10
const SearchResults = ({ language, repos, totalRepoCount }) => {
  return (
    <>
      <h2>Top { REPO_COUNT } { language } repos</h2>
      <ul>
        {
          repos.slice(0, REPO_COUNT).map(item => (
            <Item key={item.id}>
              <a href={item.htmlUrl} target='_blank'>
                { item.name }
              </a>
            </Item>
          ))
        }
      </ul>
      <small>{ totalRepoCount } repos found</small>
    </>
  )
}

export default SearchResults
