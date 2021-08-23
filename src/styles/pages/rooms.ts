import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    text-align: center;

    margin: 3rem;
  }

  main {
    width: 100%;
    max-width: 1000px;
    margin: 1rem;

    & > div.btn-group {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      margin-top: 1rem;

      button {
        max-width: 150px;
        margin-left: 0.5rem;
      }
    }
  }
`
