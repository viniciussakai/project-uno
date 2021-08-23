import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .player {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    position: relative;

    width: 100%;
    max-width: 450px;

    height: 100%;
    max-height: 600px;

    border: 2px solid ${props => props.theme.colors.lightGray};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    .player-header {
      padding: 1rem;
      border-bottom: 3px solid ${props => props.theme.colors.lightGray};

      button {
        position: absolute;
        text-align: center;

        width: 40px;
        height: 40px;

        font-size: 2rem;

        top: 10px;
        right: 10px;

        cursor: pointer;

        background-color: transparent;
      }
    }
    .player-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 2rem;

      span {
        margin: 2rem 0;
        font-weight: 900;
      }
    }
    .player-footer {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      background-color: ${props => props.theme.colors.lightGray};
      padding: 1rem;

      button {
        cursor: pointer;
        background-color: ${props => props.theme.colors.primary};
        color: white;

        border-radius: 5px;
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: capitalize;

        padding: 0.5rem 2rem;

        &:hover {
          filter: brightness(1.5);
        }
      }

      .btn-transparent {
        background-color: transparent;
        color: ${props => props.theme.colors.gray};
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  .players-list {
    list-style: none;
    width: 100%;
    border-top: 2px solid ${props => props.theme.colors.lightGray};
    border-bottom: 2px solid ${props => props.theme.colors.lightGray};

    li {
      display: flex;
      align-items: center;

      border-top: 2px solid ${props => props.theme.colors.lightGray};
      border-bottom: 2px solid ${props => props.theme.colors.lightGray};
      border-left: 4px solid ${props => props.theme.colors.lightGray};
      border-right: 4px solid ${props => props.theme.colors.lightGray};

      padding: 0.8rem 0;
      font-weight: 600;
      text-transform: uppercase;

      img {
        margin: 0 1rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;

        background-color: gray;
      }
    }
  }
`
