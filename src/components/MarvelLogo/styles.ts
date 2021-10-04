import styled from 'styled-components/native'

interface MarvelProps {
  size?: number
}

export const MarvelBG = styled.View<MarvelProps>`
  width: 40%;
  background-color: red;
  height: 70px;
  transform: scale(${(props) => (props.size ? props.size : 1)});
  margin-left: ${(props) => (props.size ? 'auto' : '0px')};
`
export const MarvelText = styled.Text<MarvelProps>`
  font-family: 'Marvel';
  color: white;
  text-align: center;
  font-size: 70px;
`
export const TextWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
