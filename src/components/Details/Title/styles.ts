import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: ${width * 0.1}px;
  align-items: center;
`
