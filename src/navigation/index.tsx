import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { DetalhesFilme } from '../screens/DetalhesFilme'
import { DetalhesPersonagem } from '../screens/DetalhesPersonagem'
import { DetalhesQuadrinho } from '../screens/DetalhesQuadrinho'
import { Filmes } from '../screens/Filmes'
import Login from '../screens/Login'
import { Personagens } from '../screens/Personagens'
import { Quadrinhos } from '../screens/Quadrinhos'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { authenticate } from '../redux/slicers/authSlice'

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

function RootNavigator() {
  const { authenticated } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  React.useEffect(() => {
    const getLogin = async () => {
      const auth = await AsyncStorage.getItem('login')
      if (auth) dispatch(authenticate())
    }
    getLogin()
  }, [])

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authenticated ? (
        <>
          <Stack.Screen name="Personagens" component={Personagens} />
          <Stack.Screen
            name="DetalhesPersonagem"
            component={DetalhesPersonagem}
          />
          <Stack.Screen name="Filmes" component={Filmes} />
          <Stack.Screen name="DetalhesFilme" component={DetalhesFilme} />
          <Stack.Screen name="Quadrinhos" component={Quadrinhos} />
          <Stack.Screen
            name="DetalhesQuadrinho"
            component={DetalhesQuadrinho}
          />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  )
}
