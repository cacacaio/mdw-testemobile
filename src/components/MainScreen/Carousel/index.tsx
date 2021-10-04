import React from 'react'
import { View } from 'react-native'
import { Text } from '../../../screens/Personagens/styles'
import { FeaturedCharacters, FeaturedMovies } from '../../../types'
import {
  CarouselContainer,
  MainImage,
  OpacityOverlay,
  RatingsContainer,
  RatingStyled,
  SecondaryImage,
  TertiaryImage,
} from './styles'

interface Props {
  data: FeaturedCharacters | FeaturedMovies
}

interface Teste {
  image: any
}

type Features = FeaturedCharacters[number] | FeaturedMovies[number]

/**
 * Lista em estilo Carroussel para as mains
 */

export function Carousel({ data }: Props) {
  const featured = {
    primary: {} as Features,
    secondary: {} as Features,
    tertiary: {} as Features,
  }
  if ('featured' in data[0]) {
    featured.primary = data.find(({ featured }) => featured == 'primary')
    featured.secondary = data.find(({ featured }) => featured == 'secondary')
    featured.tertiary = data.find(({ featured }) => featured == 'tertiary')
  }
  return (
    <CarouselContainer>
      <View>
        <MainImage source={featured.primary.image}></MainImage>
        <OpacityOverlay>
          <Text size={14}>{featured.primary.name}</Text>
        </OpacityOverlay>
      </View>
      <SecondaryImage source={featured.secondary.image}></SecondaryImage>
      <TertiaryImage source={featured.tertiary.image}></TertiaryImage>
      <RatingsContainer>
        <Text size={12}>Avaliações dos Fãs</Text>
        <RatingStyled defaultRating={featured.primary.rating}></RatingStyled>
      </RatingsContainer>
    </CarouselContainer>
  )
}
