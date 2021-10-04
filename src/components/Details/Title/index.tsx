import { GlyphMap } from '@expo/vector-icons/build/createIconSet'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../../../screens/Personagens/styles'
import { TitleContainer } from './styles'

interface Props {
  onPress: () => void
  tipo: string
}

/**
 * @param onPress Callback para voltar para a main
 * @param tipo Tipo da tela de detalhes para mudar o titulo e icone
 */
export function TitleDetails({ onPress, tipo }: Props) {
  const [icon, setIcon] = useState<any>('close')
  useEffect(() => {
    if (tipo == 'Filmes') setIcon('film-outline')
    if (tipo == 'Personagens') setIcon('people')
    if (tipo == 'HQs') setIcon('book')
  }, [])
  return (
    <TitleContainer>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          style={{ marginRight: 10 }}
          name="arrow-back"
          color="red"
          size={36}
        />
      </TouchableOpacity>
      <Ionicons style={{ marginRight: 20 }} name={icon} color="red" size={36} />
      <Text bold size={24}>
        {tipo}
      </Text>
    </TitleContainer>
  )
}
