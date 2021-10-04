import React, { useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CheckboxLogin from '../../components/Login/CheckboxLogin'
import Input from '../../components/Login/Input'
import LoginButton from '../../components/Login/LoginButton'
import MarvelLogo from '../../components/MarvelLogo'
import {
  BgImg,
  BgOpacity,
  FormBody,
  FormHeader,
  HeaderTitle,
  ImageBG,
  LoginContainer,
  SubTitle,
} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { authenticate } from '../../redux/slicers/authSlice'

export default function Login() {
  const dispatch = useDispatch()

  const handleLogin = async () => {
    if (login != '' && password != '') {
      await AsyncStorage.setItem('login', 'OK')
      dispatch(authenticate())
    } else {
      alert('Digite um login e senha')
    }
  }
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginContainer>
        <MarvelLogo />
        <FormHeader>
          <HeaderTitle>Bem-Vindo!</HeaderTitle>
          <SubTitle>Fazer login</SubTitle>
        </FormHeader>
        <FormBody>
          <Input onChange={(v) => setLogin(v)} placeholder="E-mail"></Input>
          <Input onChange={(v) => setPassword(v)} placeholder="Senha"></Input>
          <LoginButton onClick={handleLogin}></LoginButton>
          <CheckboxLogin />
          <SubTitle>
            É novo(a) aqui?
            <Text style={{ color: 'red', fontWeight: 'bold' }}>
              Cadastre-se
            </Text>
          </SubTitle>
        </FormBody>
      </LoginContainer>
      <ImageBG>
        <BgImg source={require('../../assets/images/login-bg.png')} />
        <BgOpacity />
      </ImageBG>
    </SafeAreaView>
  )
}
