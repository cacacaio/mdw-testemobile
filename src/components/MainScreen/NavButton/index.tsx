import React, { ReactNode } from 'react'
import { ButtonText, ButtonWrapper, ButtonGradient } from './styles'
interface Props {
  children: ReactNode
  onPress: () => void
}

/**
 * Botão da NavBar lateral
 */
export function NavButton({ children, onPress }: Props) {
  return (
    <ButtonGradient>
      <ButtonWrapper onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </ButtonWrapper>
    </ButtonGradient>
  )
}
