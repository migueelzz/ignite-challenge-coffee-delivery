import styled from 'styled-components'

export const RadioContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  border-radius: 6px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors['base-text']};
  background: ${({ theme }) => theme.colors['base-button']};

  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors['purple-dark']};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
