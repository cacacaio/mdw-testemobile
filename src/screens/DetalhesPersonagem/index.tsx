import Ionicons from '@expo/vector-icons/Entypo'
import React, { useState } from 'react'
import { Image, ListRenderItem, Modal, View } from 'react-native'
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
  ModalWrapper,
} from './styles'
import { MotiView } from 'moti'
import { Text } from '../Personagens/styles'
import { RatingStyled } from '../../components/MainScreen/Carousel/styles'
import { RootState } from '../../redux/store/store'

export function DetalhesPersonagem({ navigation }) {
  const { characters } = useSelector((state: RootState) => state.characters)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = (id: number) => {
    setModalOpen(true)
  }

  const renderCard: ListRenderItem<typeof characters[number]> = ({
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
        <TitleDetails onPress={() => navigation.goBack()} tipo="Personagens" />
        <CardContainer>
          <FlatList
            numColumns={2}
            data={characters}
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
      <Modal
        transparent
        onRequestClose={() => setModalOpen(false)}
        visible={modalOpen}
      >
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
            <Image
              source={require('../../assets/images/Personagens/aranhaM.png')}
              style={{
                height: '30%',
                width: '110%',
                borderRadius: 30,
                marginTop: -5,
              }}
            ></Image>
            <CardContent>
              <Text bold size={22}>
                {characters[0].name}
              </Text>
              <Text bold size={16}>
                Aparições:
              </Text>
              <FlatList
                data={characters[0].apparitions}
                keyExtractor={(_item, i) => i.toString()}
                renderItem={({ item }) => <Text size={12}>{item}</Text>}
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
