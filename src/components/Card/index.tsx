import {
  ButtonAddCoffeeCart,
  CardCoffeeContainer,
  FooterCardCoffee,
  Tag,
} from './styles'

import { ShoppingCartSimple, CheckCircle } from 'phosphor-react'
import { QuantityInput } from '../Form/QuantityInput'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const { addItem } = useContext(CartContext)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)

  function incrementQuantityItem() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantityItem() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CardCoffeeContainer>
      <div>
        <img src={coffee.image} alt="" />
        <Tag>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tag>
        <h1>{coffee.title}</h1>
        <p>{coffee.description}</p>

        <FooterCardCoffee>
          <p>
            R$ <strong>{coffee.price.toFixed(2).replace('.', ',')}</strong>
          </p>

          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantityItem}
            decrementQuantity={decrementQuantityItem}
          />

          <ButtonAddCoffeeCart type="button" onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckCircle size={22} />
            ) : (
              <ShoppingCartSimple size={22} weight="fill" />
            )}
          </ButtonAddCoffeeCart>
        </FooterCardCoffee>
      </div>
    </CardCoffeeContainer>
  )
}
