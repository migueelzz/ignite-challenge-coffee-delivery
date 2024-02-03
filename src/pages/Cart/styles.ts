import styled from 'styled-components'

export const CartContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0;

  display: grid;
  grid-template-columns: 640px 1fr;
  gap: 2rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const AddressContainer = styled(FormsContainer)``

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentSummary = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const PaymentErrorMessage = styled.small`
  font-size: 0.75rem;
  font-weight: 400;
  color: #ef4444;
`

export const CardCoffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    margin: 24px 0;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1;
    border: 0;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors['base-text']};

    > p {
      font-size: 0.875rem;
    }
  }

  div:last-child {
    font-size: 1.25rem;
    font-weight: bold;

    padding-bottom: 1.25rem;
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  max-width: 368px;
  padding: 12px 0;
  cursor: pointer;

  border: none;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.yellow};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

// export const CartItemsEmpty = styled(Heading)`
//   align-items: flex-end;
//   svg {
//     color: ${({ theme }) => theme.colors['yellow-dark']};
//   }
// `
