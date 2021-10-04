import styled from 'styled-components/native'
import { Text } from '../../screens/Personagens/styles'

export const HeaderAreaStyled = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`
export const ModalHeader = styled.View`
  height: 20%;
  width: 30%;
  background-color: black;
  border-bottom-right-radius: 20px;
  border-right-width: 1px;
  border-color: red;
  border-bottom-width: 1px;
  justify-content: space-evenly;
  align-items: center;
`
export const NavText = styled(Text).attrs({ color: 'red', size: 12 })``
