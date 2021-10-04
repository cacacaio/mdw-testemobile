import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import { AirbnbRating } from 'react-native-ratings'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const CarouselContainer = styled.View`
  margin-top: 20px;
  flex: 4;
  flex-direction: row;
  justify-content: space-around;
`
export const MainImage = styled.Image`
  width: 180px;
  height: 220px;
  border-radius: 50px;
  border-width: 1px;
  border-color: red;
`

export const SecondaryImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 25px;
  opacity: 0.6;
`
export const TertiaryImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  opacity: 0.6;
`
export const OpacityOverlay = styled(LinearGradient).attrs({
  colors: ['transparent', 'red'],
})`
  position: absolute;
  flex: 1;
  justify-content: center;
  bottom: ${height * 0.008}px;
  padding: 14px;
  width: 100%;
  left: 5px;
  height: 40%;
  border-radius: 40px;
`
export const RatingsContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 8px;
  right: 8px;
  height: 35%;
  width: 50%;
  background-color: black;
  border-radius: 20px;
  border-width: 1px;
  border-color: red;
`

export const RatingStyled = styled(AirbnbRating).attrs({
  size: 20,
  tintColor: 'black',
  showRating: false,
  isDisabled: true,
})``
