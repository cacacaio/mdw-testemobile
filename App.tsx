import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useLoadedAssets } from './src/hooks/useLoadedAssets'
import Navigation from './src/navigation'
import { store } from './src/redux/store/store'
export default function App() {
  const isLoadingComplete = useLoadedAssets()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    )
  }
}
