import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/default'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
