import axios from 'axios'
import humps from 'humps'

const ENDPOINT = 'https://api.github.com'

const github = {
  getTopRepos({ lang = 'javascript' }) {
    let path = `${ENDPOINT}/search/repositories?q=language:${lang}&sort=stars&order=desc`
    return axios.get(path).then(res => {
      return humps.camelizeKeys(res.data)
    })
  }
}

export default github
