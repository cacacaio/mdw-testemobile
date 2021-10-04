import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { Text } from '../../screens/Personagens/styles'
import MarvelLogo from '../MarvelLogo'
import { HeaderAreaStyled, ModalHeader, NavText } from './styles'

/**
 * Cabeçalho de todas telas
 */
export function HeaderArea() {
  const [modalOpen, setModalOpen] = useState(false)
  const navigation = useNavigation()
  const handleNavigate = () => {
    setModalOpen(false)
    navigation.navigate('Login')
  }

  return (
    <HeaderAreaStyled>
      <Ionicons
        onPress={() => setModalOpen(true)}
        name="list"
        color="red"
        size={42}
      ></Ionicons>
      <MarvelLogo size={0.5} />
      <Modal visible={modalOpen} transparent>
        <ModalHeader>
          <NavText>Perfil</NavText>
          <NavText>Configurações</NavText>
          <NavText>Visite nosso site</NavText>
          <TouchableOpacity onPress={handleNavigate}>
            <NavText>Sair</NavText>
          </TouchableOpacity>
        </ModalHeader>
      </Modal>
    </HeaderAreaStyled>
  )
}
