import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  background-color: ${({ theme }) => theme.colors['base-input']};

  input {
    color: ${({ theme }) => theme.colors['base-text']};
    width: 100%;
    background-color: transparent;
    appearance: none;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`

export const InputOptional = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors['base-label']};
  padding-right: 12px;
  font-style: italic;
`

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #ef4444;
`
