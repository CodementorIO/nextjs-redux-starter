import { withRouter } from 'next/router'
import App, { Container } from 'next/app'

class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    const { asPath, pathname, query } = router
    const url = {
      asPath,
      pathname,
      query
    }
    return (
      <Container>
        <Component {...pageProps} url={url} />
      </Container>
    )
  }
}

export default withRouter(MyApp)
