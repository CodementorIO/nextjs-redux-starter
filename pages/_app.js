import withRedux from 'next-redux-wrapper'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import App from 'next/app'
import Layout from 'components/Layout'
import createStore from 'store/createStore'
import theme from 'theme'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
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
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Layout>
            <Component router={router} {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)
