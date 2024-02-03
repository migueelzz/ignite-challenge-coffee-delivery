import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 5rem;

  > div {
    h1 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors['yellow-dark']};
      font-family: 'Baloo 2', sans-serif;
    }

    > p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['base-subtitle']};

      margin-bottom: 28px;
    }

    > div {
      display: flex;
      align-items: center;

      justify-content: space-between;

      img {
        width: 492px;
      }
    }
  }
`

export const OrderInfo = styled.div`
  width: 100%;
  min-width: 526px;
  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top left,
      ${({ theme }) => theme.colors.yellow},
      ${({ theme }) => theme.colors.purple}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const OrderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  padding: 40px 40px 40px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  svg {
    padding: 8px;
    border-radius: 999px;
  }

  div {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`
