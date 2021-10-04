import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../../../screens/Personagens/styles'
import { CardBody, OpacityCardDetails } from './styles'

interface Props {
  name: string
  description: string
  image: any
  onPress: () => void
}
export function DetailsCard({ name, description, image, onPress }: Props) {
  const navigation = useNavigation()
  return (
    <CardBody source={image}>
      <OpacityCardDetails>
        <Text center color="white" size={14}>
          {name}
        </Text>
        <Text center color="white" size={10}>
          {description}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text center size={12}>
            ver detalhes
          </Text>
        </TouchableOpacity>
      </OpacityCardDetails>
    </CardBody>
  )
}
