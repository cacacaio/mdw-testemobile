import React from 'react'
import { Apparitions } from '../../../screens/Personagens'
import { Text } from '../../../screens/Personagens/styles'
import { CardImage, Container, ImageView } from './styles'

interface Props {
  data: Apparitions
  tipo: string
}

export function ImageList({ data, tipo }) {
  return (
    <Container>
      <Text>{tipo}</Text>
      <ImageView>
        {data.map(({ image, id }) => (
          <CardImage source={image} key={id}></CardImage>
        ))}
      </ImageView>
    </Container>
  )
}
