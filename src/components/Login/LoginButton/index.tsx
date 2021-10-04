import React from 'react'
import {LoginButtonStyled, ButtonText} from './styles'

interface Props {
  onClick: () => void
}

export default function LoginButton({onClick}: Props) {
  return (
    <LoginButtonStyled onPress={() => onClick()}>
      <ButtonText>Entrar</ButtonText>
    </LoginButtonStyled>
  )
}
