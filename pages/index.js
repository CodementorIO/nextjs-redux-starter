import RepoSearch from 'features/repoSearch/RepoSearch'
import { useRouter } from 'next/router'
import { createStore } from 'store'
import { getReposAsync } from 'features/repoSearch/repoSearchSlice'

const IndexPage = () => {
  const router = useRouter()
  return (
    <>
      <div onClick={() => router.push('/about')}>
        GO TO ABOUT (with <code>router</code>)
      </div>
      <RepoSearch />
    </>
  )
}

export async function getStaticProps () {
  const store = createStore()
  await store.dispatch(getReposAsync('python'))

  return {
    props: {
      state: store.getState()
    }
  }
}

export default IndexPage
