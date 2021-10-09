import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import github from 'libs/github'

const initialState = {
  language: 'javascript',
  repos: [],
  totalRepoCount: 0,
  status: 'idle'
}

export const getReposAsync = createAsyncThunk(
  'repoSearch/getRepos',
  async (language) => {
    const response = await github.getTopRepos({ language })
    return response
  }
)

const repoSearchSlice = createSlice({
  name: 'repoSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReposAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getReposAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.language = action.meta.arg
        state.totalRepoCount = action.payload.totalCount
        state.repos = action.payload.items
      })
  }
})

export const selectRepoSearch = (state) => state.repoSearch

export const repoSearchReducer = repoSearchSlice.reducer
