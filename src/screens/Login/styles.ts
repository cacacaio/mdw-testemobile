import {LinearGradient, LinearGradientProps} from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const ImageBG = styled.View`
  flex: 3;
  width: 100%;
`
export const BgImg = styled.Image`
  width: 100%;
  height: 100%;
`

export const BgOpacity = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.95)', 'rgba(0,0,0,0.4)'],
})<LinearGradientProps>`
  position: absolute;
  width: 100%;
  height: 100%;
`
export const LoginContainer = styled.View`
  flex: 4;
  width: 100%;
  background-color: black;
  align-items: center;
  padding-top: 10%;
`
export const FormHeader = styled.View`
  flex: 2;
  justify-content: flex-end;
`
export const FormBody = styled.View`
  padding-top: 5%;
  flex: 5;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`
export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-family: 'Axiforma';
  color: white;
  font-weight: bold;
  text-align: center;
`
export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: 'Axiforma';
  color: white;
  text-align: center;
`