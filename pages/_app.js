import withRedux from 'next-redux-wrapper'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import Layout from 'components/Layout'
import createStore from 'store/createStore'
import theme from 'theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }
  render () {
    const { Component, pageProps, store, router } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyle />
            <Layout>
              <Component router={router} {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)
