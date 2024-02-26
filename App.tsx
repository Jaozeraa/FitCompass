import { StatusBar } from 'expo-status-bar';
import RootProvider from './src/hooks';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

SplashScreen.preventAutoHideAsync();
const App: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'IndustryTest-Bold': require('./assets/fonts/IndustryTest-Bold.otf'),
  });

  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP,
      );
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootProvider>
            <Routes />
          </RootProvider>
          <StatusBar style="light" animated />
        </GestureHandlerRootView>
      </NavigationContainer>
    </View>
  );
};

export default App;
