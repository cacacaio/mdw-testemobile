import React from 'react'
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

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginContainer>
        <MarvelLogo />
        <FormHeader>
          <HeaderTitle>Bem-Vindo!</HeaderTitle>
          <SubTitle>Fazer login</SubTitle>
        </FormHeader>
        <FormBody>
          <Input placeholder="E-mail"></Input>
          <Input placeholder="Senha"></Input>
          <LoginButton
            onClick={() => navigation.navigate('Personagens')}
          ></LoginButton>
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
