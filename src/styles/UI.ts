import styled from 'styled-components'

type IButtonProps = { isOutline?: boolean }
export const Button = styled.button<IButtonProps>`
  background-color: ${props =>
    props.isOutline ? 'transparent' : props.theme.colors.primary};

  border: 2px solid ${props => props.theme.colors.primary};

  color: ${props =>
    props.isOutline
      ? props.theme.colors.primary
      : props.theme.colors.background};

  border-radius: 0rem;

  cursor: pointer;

  width: 100%;
  min-width: 200px;

  padding: 1rem;

  font-size: 1.1rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.5);
  }

  svg {
    margin-right: 8px;
    color: ${props =>
      props.isOutline ? props.theme.colors.primary : props.theme.colors.white};
  }
`

export const GithubButton = styled(Button)`
  background-color: ${props => props.theme.colors.github};
  color: ${props => props.theme.colors.white};
  border: none;
`

export const GoogleButton = styled(Button)`
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  border: none;
`
export const Input = styled.input`
  width: 100%;
  border-radius: 0.3rem;
  border: 2px solid ${props => props.theme.colors.lightGray};

  padding: 15px 10px;
  font-size: 1rem;

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
    outline: 1px solid ${props => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray};
    font-weight: bold;
  }
`
