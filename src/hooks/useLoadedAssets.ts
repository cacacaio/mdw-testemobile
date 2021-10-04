import Ionicons from '@expo/vector-icons/Ionicons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          Marvel: require('../assets/fonts/MarvelRegular-Dj83.ttf'),
          Axiforma: require('../assets/fonts/Axiforma.otf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
