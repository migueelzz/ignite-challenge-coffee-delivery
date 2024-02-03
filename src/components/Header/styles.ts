import styled from 'styled-components'

export const HeaderContainer = styled.header`
  /* height: 104px; */
  /* position: fixed;
  top: 0; */
  width: 100%;

  /* z-index: 20; */

  background: ${({ theme }) => theme.colors.background};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 20px;
    width: 100%;
    max-width: 70rem;
    height: 6.5rem;
    margin: 0 auto;
  }
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${({ theme }) => theme.colors['purple-light']};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    padding: 10px 8px;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      font-size: 12px;
      line-height: 1;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
