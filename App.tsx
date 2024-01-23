import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Navigation/AppStack';
import {useFonts} from 'expo-font';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
