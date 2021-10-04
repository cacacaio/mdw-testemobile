import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../../../screens/Personagens/styles'
import { Characters, Comics, Movies } from '../../../types'
import {
  FooterCard,
  CardView,
  Container,
  FooterImagesCont,
  TitleContainer,
} from './styles'

interface Props {
  onPress: () => void
  data: Characters | Movies | Comics
  tipo: string
}

/**
 * Footer List for Main Pages
 * @param onPress Navigate to Details Screen
 */

export function FooterList({ onPress, data, tipo }: Props) {
  return (
    <Container>
      <TitleContainer>
        <Text size={14}>{tipo}</Text>
        <TouchableOpacity
          style={{ marginLeft: 'auto', marginRight: 20 }}
          onPress={onPress}
        >
          <Text size={14}>
            <Ionicons color="white" size={16} name="add" /> Ver Todos
          </Text>
        </TouchableOpacity>
      </TitleContainer>
      <FooterImagesCont>
        {data.map(
          ({ id, image2, name }) =>
            image2 && (
              <CardView key={id}>
                <FooterCard source={image2} />
                <Text size={12} center>
                  {name}
                </Text>
              </CardView>
            )
        )}
      </FooterImagesCont>
    </Container>
  )
}
