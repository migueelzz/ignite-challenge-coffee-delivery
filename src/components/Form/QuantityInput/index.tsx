import { Minus, Plus } from 'phosphor-react'
import { ButtonQuantityCoffee } from './styles'

interface QuantityInputProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityInputProps) {
  return (
    <ButtonQuantityCoffee>
      <button type="button" onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </ButtonQuantityCoffee>
  )
}
