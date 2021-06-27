import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;

  & > div {
    height: 100%;
  }

  aside.illustration {
    flex: 1;
    background-color: ${props => props.theme.colors.primary};
    max-width: 800px;

    display: grid;
    place-content: center;
  }

  main {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    & > diV {
      width: 60%;
      max-width: 400px;
    }

    .social button {
      margin-bottom: 10px;
    }

    & .social:last-child {
      margin-bottom: 15px;
    }

    .divider {
      text-align: center;
      position: relative;

      span {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.grey};
        font-weight: 500;
        font-size: 0.9rem;
        padding: 0 8px;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;

        background-color: ${props => props.theme.colors.grey};
        z-index: -1;

        height: 2px;
        width: 100%;
      }
    }

    input {
      margin: 15px 0;
    }
  }
`
