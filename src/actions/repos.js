
import github from 'libs/github'

export const GET_TOP_REPOS = Symbol('GET_TOP_REPOS')
export const GET_TOP_REPOS_SUCCESS = Symbol('GET_TOP_REPOS_SUCCESS')

export function getTopRepos ({ lang }) {
  return dispatch => {
    dispatch({
      type: GET_TOP_REPOS
    })

    return github.getTopRepos({ lang }).then(res => {
      dispatch(onGetTopRepo(lang, res))
    })
  }
}

function onGetTopRepo (lang, payload) {
  return {
    type: GET_TOP_REPOS_SUCCESS,
    lang,
    payload
  }
}
