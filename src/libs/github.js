import axios from 'axios'
import humps from 'humps'
import config from 'config'

const github = {
  getTopRepos ({ language = 'javascript' }) {
    const path = `${config.githubApiEndpoint}/search/repositories?q=language:${language}&sort=stars&order=desc`
    return axios.get(path).then(res => {
      return humps.camelizeKeys(res.data)
    })
  }
}

export default github
