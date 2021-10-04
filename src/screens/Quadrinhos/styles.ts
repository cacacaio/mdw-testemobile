import styled from 'styled-components/native'
import {SafeAreaView} from 'react-native-safe-area-context'

interface TextProps {
  size?: number
  color?: string
  center?: boolean
  bold?: boolean
}

export const ButtonArea = styled.View`
  flex: 2;
  justify-content: center;
`
export const MainArea = styled.View`
  flex: 8;
  padding-top: 30px;
`

export const Text = styled.Text<TextProps>`
  font-size: ${(props) => props.size || 16}px;
  font-family: 'Axiforma';
  color: ${(props) => props.color || 'white'};
  text-align: ${(props) => (props.center ? 'center' : 'auto')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
export const InfoContainer = styled.View`
  flex: 7;
`
