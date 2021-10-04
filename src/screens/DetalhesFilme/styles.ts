import styled from 'styled-components/native'
import { MotiView } from 'moti'
import Ionicons from '@expo/vector-icons/AntDesign'

export const BodyDetails = styled.View`
  flex: 9;
`
export const CardContainer = styled.View`
  flex: 9;
  align-items: center;
`
export const ModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 30%;
  background-color: rgba(0, 0, 0, 0.5);
`
export const CardContent = styled(MotiView).attrs({
  from: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 800 },
})`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  padding: 20px;
`
export const CardFooter = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
export const CardExit = styled(Ionicons).attrs({
  name: 'closecircleo',
  size: 28,
  color: 'white',
})`
  margin-left: auto;
  margin-right: 5%;
`
export const ImageStyled = styled.Image`
  height: 30%;
  width: 110%;
  border-radius: 30px;
  margin-top: -5px;
`
