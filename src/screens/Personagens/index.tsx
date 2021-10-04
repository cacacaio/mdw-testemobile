import React from 'react'
import { Carousel } from '../../components/MainScreen/Carousel'
import { Description } from '../../components/MainScreen/Description'
import { FooterList } from '../../components/MainScreen/FooterList'
import { HeaderArea } from '../../components/HeaderArea'
import { ImageList } from '../../components/MainScreen/ImageList'
import { NavButton } from '../../components/MainScreen/NavButton'
import { BodyArea, SafeArea } from '../../styles'
import { InfoContainer, MainArea, Text } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { NavBar } from '../../components/MainScreen/NavBar'

const apparitions = [
  { id: 1, image: require('../../assets/images/Filmes/ultron.jpg') },
  { id: 2, image: require('../../assets/images/Filmes/civil.jpg') },
  { id: 3, image: require('../../assets/images/Filmes/infinite.jpg') },
  { id: 4, image: require('../../assets/images/Filmes/ultimato.jpg') },
  { id: 5, image: require('../../assets/images/Filmes/wandavision.jpg') },
]

export type Apparitions = typeof apparitions

export function Personagens({ navigation }) {
  const {
    characters: { characters },
    featuredCharacters: { featuredCharacters },
  } = useSelector((state: RootState) => state)

  return (
    <SafeArea>
      <HeaderArea />
      <BodyArea>
        <NavBar navigation={navigation} />
        <MainArea>
          <Text>Top 10 - Personagens Populares</Text>
          <Carousel data={featuredCharacters}></Carousel>
          <InfoContainer>
            <Description desc={featuredCharacters[0].description} />
            <ImageList tipo="Aparições" data={apparitions} />
            <FooterList
              tipo="Personagens"
              data={characters}
              onPress={() => navigation.navigate('DetalhesPersonagem')}
            />
          </InfoContainer>
        </MainArea>
      </BodyArea>
    </SafeArea>
  )
}
