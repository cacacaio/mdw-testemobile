import React from 'react'
import { Carousel } from '../../components/MainScreen/Carousel'
import { Description } from '../../components/MainScreen/Description'
import { FooterList } from '../../components/MainScreen/FooterList'
import { HeaderArea } from '../../components/HeaderArea'
import { ImageList } from '../../components/MainScreen/ImageList'
import { NavButton } from '../../components/MainScreen/NavButton'
import { BodyArea, SafeArea } from '../../styles'
import { ButtonArea, InfoContainer, MainArea, Text } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { NavBar } from '../../components/MainScreen/NavBar'

const apparitions = [
  {
    id: 1,
    image: require('../../assets/images/Personagens/Aparicoes/Wanda.png'),
  },
  {
    id: 2,
    image: require('../../assets/images/Personagens/Aparicoes/Aranha.png'),
  },
  {
    id: 3,
    image: require('../../assets/images/Personagens/Aparicoes/Hulk.png'),
  },
  {
    id: 4,
    image: require('../../assets/images/Personagens/Aparicoes/Estranho.png'),
  },
  {
    id: 5,
    image: require('../../assets/images/Personagens/Aparicoes/Marvel.png'),
  },
]

export type Apparitions = typeof apparitions

export function Filmes({ navigation }) {
  const {
    movies: { movies },
    featuredMovies: { featuredMovies },
  } = useSelector((state: RootState) => state)

  return (
    <SafeArea>
      <HeaderArea />
      <BodyArea>
        <NavBar navigation={navigation} />
        <MainArea>
          <Text>Top 10 - Filmes Populares</Text>
          <Carousel data={featuredMovies}></Carousel>
          <InfoContainer>
            <Description desc={featuredMovies[0].description} />
            <ImageList tipo="Personagens" data={apparitions} />
            <FooterList
              tipo="Filmes"
              data={movies}
              onPress={() => navigation.navigate('DetalhesFilme')}
            />
          </InfoContainer>
        </MainArea>
      </BodyArea>
    </SafeArea>
  )
}
