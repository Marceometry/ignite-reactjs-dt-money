import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    font-weight: bold;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    transition-duration: 0.2s;
    transition-property: background-color, color, border-color;

    &:not(:disabled):hover {
      border-color: ${(props) => props.theme['green-500']};
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }
  }
`
