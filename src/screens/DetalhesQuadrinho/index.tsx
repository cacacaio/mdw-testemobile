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
  ImageSellers,
  ModalWrapper,
} from './styles'
import { MotiView } from 'moti'
import { Text } from '../Personagens/styles'
import { RatingStyled } from '../../components/MainScreen/Carousel/styles'
import { RootState } from '../../redux/store/store'

export function DetalhesQuadrinho({ navigation }) {
  const { comics } = useSelector((state: RootState) => state.comics)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = (id: number) => {
    setModalOpen(true)
  }

  const renderCard: ListRenderItem<typeof comics[number]> = ({
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
        <TitleDetails onPress={() => navigation.goBack()} tipo={'HQs'} />
        <CardContainer>
          <FlatList
            numColumns={2}
            data={comics.slice(0, 4)}
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
              source={require('../../assets/images/Comics/parabolaM.png')}
              style={{
                height: '30%',
                width: '110%',
                borderRadius: 30,
                marginTop: -5,
              }}
            ></Image>
            <CardContent>
              <Text bold size={22}>
                {comics[0].name}
              </Text>
              <Text size={12} style={{ lineHeight: 20, marginBottom: 20 }}>
                {comics[0].description}
              </Text>
              <Text size={10}>Disponível para compra:</Text>
              <FlatList
                data={comics[0].sellers}
                horizontal
                keyExtractor={(_item, i) => i.toString()}
                renderItem={({ item }) => <ImageSellers source={item} />}
              ></FlatList>
              <Text style={{ marginTop: 15 }}>Crítica</Text>
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
