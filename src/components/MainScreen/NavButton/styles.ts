import {LinearGradient} from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ['black', 'red'],
})`
  height: 20%;
  width: 50px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-family: 'Axiforma';
`

export const ButtonWrapper = styled.TouchableOpacity`
  width: 100px;
  transform: rotate(90deg);
`
