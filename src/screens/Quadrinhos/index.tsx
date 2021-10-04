import React from 'react'
import { Carousel } from '../../components/MainScreen/Carousel'
import { Description } from '../../components/MainScreen/Description'
import { FooterList } from '../../components/MainScreen/FooterList'
import { HeaderArea } from '../../components/HeaderArea'
import { ImageList } from '../../components/MainScreen/ImageList'
import { BodyArea, SafeArea } from '../../styles'
import { InfoContainer, MainArea, Text } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { NavBar } from '../../components/MainScreen/NavBar'

const creators = [
  {
    id: 1,
    image: require('../../assets/images/Comics/creators/stan.png'),
  },
  {
    id: 2,
    image: require('../../assets/images/Comics/creators/moebius.png'),
  },
]

export type Creators = typeof creators

export function Quadrinhos({ navigation }) {
  const {
    comics: { comics },
    featuredComics: { featuredComics },
  } = useSelector((state: RootState) => state)

  return (
    <SafeArea>
      <HeaderArea />
      <BodyArea>
        <NavBar navigation={navigation} />
        <MainArea>
          <Text>Top 10 - HQs Populares</Text>
          <Carousel data={featuredComics}></Carousel>
          <InfoContainer>
            <Description desc={featuredComics[0].description} />
            <ImageList tipo="Criadores" data={creators} />
            <FooterList
              tipo="Quadrinhos"
              data={comics}
              onPress={() => navigation.navigate('DetalhesQuadrinho')}
            />
          </InfoContainer>
        </MainArea>
      </BodyArea>
    </SafeArea>
  )
}
