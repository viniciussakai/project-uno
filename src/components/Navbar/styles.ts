import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 10rem;

  background-color: ${props => props.theme.colors.primary};
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 60px;
    width: 60px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 600;
      font-size: 1.2rem;
    }

    img {
      width: 50px;
      height: 50px;
      margin-left: 1rem;

      border-radius: 50%;
      background-color: #fff;
    }
  }
`
