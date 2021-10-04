import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`
export const CardBody = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 40 },
})`
  border-radius: 40px;
  margin: 10px;
  background-color: white;
  width: ${width * 0.42}px;
  height: ${height * 0.3}px;
`
export const OpacityCardDetails = styled(LinearGradient).attrs({
  colors: ['red', 'transparent'],
})`
  position: absolute;
  flex: 1;
  justify-content: space-evenly;
  bottom: 0px;
  width: 100%;
  height: 60%;
  border-radius: 40px;
`
