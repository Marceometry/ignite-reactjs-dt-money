import { ThemeProvider } from 'styled-components'
import { TransactionsContextProvider } from './contexts'
import { GlobalStyle, defaultTheme } from './styles'
import { Transactions } from './pages'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  )
}
