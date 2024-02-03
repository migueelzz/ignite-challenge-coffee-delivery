import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  margin-bottom: 1.25rem;

  background: ${({ theme }) => theme.colors['base-card']};

  border-top-right-radius: 36px;
  border-top-left-radius: 6px;

  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 13.5rem;

    img {
      margin-top: calc(0px - 3rem);
    }

    h1 {
      font-size: 1.25rem;
      font-family: 'Baloo 2', sans-serif;
      color: ${({ theme }) => theme.colors['base-subtitle']};
      padding-bottom: 0.5rem;
      padding-top: 1rem;
    }

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-label']};

      padding-bottom: 2.0625rem;
    }
  }
`

export const Tag = styled.span`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
`

export const FooterCardCoffee = styled.footer`
  width: 100%;
  height: 2.375rem;

  display: flex;
  justify-content: space-between;

  p {
    width: 4.1875rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-text']};

    strong {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
    }
  }
`

export const ButtonAddCoffeeCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  line-height: 1;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors['purple-dark']};
`
