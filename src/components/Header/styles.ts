import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
