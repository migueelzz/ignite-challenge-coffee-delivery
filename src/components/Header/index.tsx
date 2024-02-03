import { Aside, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const theme = useTheme()

  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src="/images/logo.svg" alt="" />
        </NavLink>
        <Aside>
          <div>
            <MapPin
              size={22}
              weight="fill"
              color={theme.colors['purple-dark']}
            />
            <span>Porto Alegre, RS</span>
          </div>
          <NavLink to={`cart`} aria-disabled={cart.length === 0}>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </NavLink>
        </Aside>
      </nav>
    </HeaderContainer>
  )
}
