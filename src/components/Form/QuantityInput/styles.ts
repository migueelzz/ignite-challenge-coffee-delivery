import styled from 'styled-components'

export const ButtonQuantityCoffee = styled.form`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  gap: 8px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;

    border: none;
    outline: none;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
