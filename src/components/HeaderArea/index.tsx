import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slicers/authSlice'
import MarvelLogo from '../MarvelLogo'
import { HeaderAreaStyled, ModalHeader, NavText } from './styles'

/**
 * Cabeçalho de todas telas
 */
export function HeaderArea() {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()
  const handleNavigate = async () => {
    setModalOpen(false)
    await AsyncStorage.removeItem('login')
    dispatch(logout())
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
