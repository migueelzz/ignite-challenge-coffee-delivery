import { ReactNode, createContext, useEffect, useState } from 'react'
import { OrderInfo } from '../pages/Cart'
import { useNavigate } from 'react-router-dom'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const storedStateAsJSON = localStorage.getItem(
    '@ignite-timer:cycles-state-1.0.0',
  )
  const navigate = useNavigate()

  const [cart, setCart] = useState<Item[]>([])
  const [orders, setOrders] = useState<Order[]>([] || storedStateAsJSON)

  function addItem(item: Item) {
    setCart([...cart, item])
  }

  function removeItem(itemId: Item['id']) {
    const cartItensWithoutOne = cart.filter((cartItem) => {
      return cartItem.id !== itemId
    })
    setCart(cartItensWithoutOne)
  }

  function incrementItemQuantity(itemId: Item['id']) {
    const itemToIncrement = cart.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    )

    setCart(itemToIncrement)
  }

  function decrementItemQuantity(itemId: Item['id']) {
    const itemToIncrement = cart.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item,
    )

    setCart(itemToIncrement)
  }

  function checkout(order: OrderInfo) {
    const newOrder = {
      id: new Date().getTime(),
      items: cart,
      ...order,
    }

    setOrders([...orders, newOrder])
    setCart([])

    const stateJSON = JSON.stringify(newOrder)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)

    navigate(`/order/${newOrder.id}/success`)
  }

  useEffect(() => {
    console.log(cart)
    console.log(orders)
  }, [cart, orders])

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        checkout,
        addItem,
        removeItem,
        decrementItemQuantity,
        incrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
