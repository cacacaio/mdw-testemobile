import React from 'react'
import { View } from 'react-native'
import { Text } from '../../../screens/Personagens/styles'

interface Props {
  desc: string
}

/**
 * Descrição do destaque da página
 */
export function Description({ desc }: Props) {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text>{desc}</Text>
      <Text color="red" size={10}>
        ver mais
      </Text>
    </View>
  )
}
