import { render } from '@testing-library/react'
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

export * from '@testing-library/react'
export { customRender as render }
