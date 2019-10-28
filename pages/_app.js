import { ThemeProvider, createGlobalStyle } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import { withRouter } from 'next/router'
import App from 'next/app'

import createStore from 'store/createStore'
import Layout from 'components/Layout'
import theme from 'theme'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

class MyApp extends App {
  render () {
    const { Component, pageProps, router, store } = this.props
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
