import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 2;
`
export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
`
export const FooterImagesCont = styled.View`
  flex: 3;
  flex-direction: row;
`
export const FooterCard = styled.Image`
  height: 60%;
  width: ${width * 0.36}px;
  margin-bottom: ${height * 0.01}px;
  border-radius: 25px;
`
export const CardView = styled.View`
  margin-right: ${width * 0.03}px;
`
export const OpenDetails = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 20px;
`
