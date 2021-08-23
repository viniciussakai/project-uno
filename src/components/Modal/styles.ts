import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    position: relative;

    width: 100%;
    max-width: 600px;

    height: 100%;
    max-height: 350px;

    border: 2px solid ${props => props.theme.colors.gray};
    border-radius: 5px;

    padding: 1rem 0;

    .modal-header {
      padding: 1rem;
      border-bottom: 2px solid ${props => props.theme.colors.lightGray};

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
    .modal-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 2rem 6rem;

      input {
        margin-bottom: 6px;
      }
    }
    .modal-footer {
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
`
