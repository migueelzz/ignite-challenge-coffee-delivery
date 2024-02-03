import { InputHTMLAttributes, LegacyRef, ReactNode, forwardRef } from 'react'
import { RadioContainer } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: RadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioContainer data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </RadioContainer>
  )
})
