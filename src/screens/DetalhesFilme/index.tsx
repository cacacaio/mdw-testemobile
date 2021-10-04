import Ionicons from '@expo/vector-icons/Entypo'
import React, { useState } from 'react'
import { Image, ListRenderItem, Modal, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DetailsCard } from '../../components/Details/DetailsCard'
import { TitleDetails } from '../../components/Details/Title'
import { HeaderArea } from '../../components/HeaderArea'
import { SafeArea } from '../../styles'
import { useSelector } from 'react-redux'
import {
  BodyDetails,
  CardContainer,
  CardContent,
  CardExit,
  CardFooter,
  ImageStyled,
  ModalWrapper,
} from './styles'
import { MotiView } from 'moti'
import { Text } from '../Personagens/styles'
import { RatingStyled } from '../../components/MainScreen/Carousel/styles'
import { RootState } from '../../redux/store/store'
import { ImageSellers } from '../DetalhesQuadrinho/styles'
import { Filter } from '../../components/Details/Filter'

export function DetalhesFilme({ navigation }) {
  const { movies } = useSelector((state: RootState) => state.movies)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = (id: number) => {
    setModalOpen(true)
  }

  const renderCard: ListRenderItem<typeof movies[number]> = ({
    item: { description, name, image, id },
  }) => (
    <DetailsCard
      name={name}
      description={description}
      image={image}
      onPress={() => handleOpenModal(id)}
    ></DetailsCard>
  )
  return (
    <SafeArea>
      <HeaderArea />
      <BodyDetails>
        <TitleDetails onPress={() => navigation.goBack()} tipo={'Filmes'} />
        <Filter />
        <CardContainer>
          <FlatList
            numColumns={2}
            data={movies.slice(0, 4)}
            keyExtractor={(item) => item.id}
            renderItem={renderCard}
          ></FlatList>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <Ionicons name="dot-single" size={36} color="red"></Ionicons>
            <Ionicons name="dot-single" size={36} color="grey"></Ionicons>
            <Ionicons name="dot-single" size={36} color="grey"></Ionicons>
          </View>
        </CardContainer>
      </BodyDetails>
      <Modal transparent visible={modalOpen}>
        <ModalWrapper>
          <MotiView
            from={{ height: '30%' }}
            animate={{ height: '80%' }}
            transition={{
              height: {
                delay: 500,
                type: 'timing',
                duration: 500,
              },
            }}
            style={{
              backgroundColor: '#800000',
              width: '70%',
              borderRadius: 30,
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <ImageStyled
              source={require('../../assets/images/Filmes/capitaoM.png')}
            ></ImageStyled>
            <CardContent>
              <Text bold size={20}>
                Capitão América : Primeiro Vingador
              </Text>
              <Text style={style.modalDesc} size={12}>
                {
                  movies.find((val) => val.name == 'Capitão América')
                    .description
                }
              </Text>
              <Text size={10} style={style.modalDesc}>
                Disponível em streaming:
              </Text>
              <FlatList
                data={
                  movies.find((val) => val.name == 'Capitão América').streaming
                }
                keyExtractor={(_item, i) => i.toString()}
                renderItem={({ item }) => <ImageSellers source={item} />}
              ></FlatList>
              <Text>Avaliações dos Fãs</Text>
              <CardFooter>
                <RatingStyled defaultRating={4} />
                <CardExit onPress={() => setModalOpen(false)} />
              </CardFooter>
            </CardContent>
          </MotiView>
        </ModalWrapper>
      </Modal>
    </SafeArea>
  )
}

const style = StyleSheet.create({
  modalDesc: { lineHeight: 20, marginTop: 10 },
})
