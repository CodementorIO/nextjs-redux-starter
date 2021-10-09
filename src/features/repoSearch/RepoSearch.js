import React from 'react'
import styled from 'styled-components'
import { selectRepoSearch, getReposAsync } from 'features/repoSearch/repoSearchSlice'
import SearchResults from 'components/SearchResults'
import { useAppDispatch, useAppSelector } from 'store'

const languages = ['javascript', 'python', 'ruby']

const RepoSearch = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(selectRepoSearch)

  return (
    <Container>
      <SearchResults
        repos={store.repos}
        totalRepoCount={store.totalRepoCount}
        language={store.language} />
      <hr />
      {store.status === 'loading' && <Overlay>🦆...</Overlay>}
      <h3>Switch language</h3>
      <Languages>
        {languages.map((lang) => {
          const getRepos = () => dispatch(getReposAsync(lang))
          return <Option key={lang} onClick={getRepos}>{lang}</Option>
        })}
      </Languages>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  padding: 1em;
  margin: 1em auto;
  position: relative;
`

const Languages = styled.div`
  display: flex;
`

const Option = styled.div`
  cursor: pointer;
  background: #eee;
  flex: 1;
  margin: 4px;
  padding: 12px;
  border: 4px;
  text-align: center;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  opacity: .9;
  width: 100%;
  height: 76%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
`

export default RepoSearch
