import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'

const WithProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: WithProviders, ...options })

export * from 'react-testing-library'
export { customRender as render }
