import React from 'react'
import { ButtonArea } from './styles'
import { NavButton } from '../NavButton'

export function NavBar({ navigation }) {
  return (
    <ButtonArea>
      <NavButton onPress={() => navigation.navigate('Personagens')}>
        Personagens
      </NavButton>
      <NavButton onPress={() => navigation.navigate('Filmes')}>
        Filmes
      </NavButton>
      <NavButton onPress={() => navigation.navigate('Quadrinhos')}>
        Quadrinhos
      </NavButton>
    </ButtonArea>
  )
}
