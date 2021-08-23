import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .list-head {
    width: 100%;
    background-color: ${props => props.theme.colors.lightGray};

    border: 1px solid ${props => props.theme.colors.lightGray};
    padding: 1rem;

    font-weight: bold;

    display: flex;
    justify-content: space-between;
  }

  .react-list-select {
    width: 100%;
    border: 1px solid ${props => props.theme.colors.lightGray};
    list-style: none;
    height: 100%;
    max-height: 550px;
    overflow: auto;
  }

  .react-list-select--item {
    width: 100%;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.lightGray};
    padding: 1rem;

    display: flex;
    justify-content: space-between;

    cursor: pointer;
  }

  .is-selected {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`
