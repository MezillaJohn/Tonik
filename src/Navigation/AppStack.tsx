import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeBottomTabs from './HomeBottomTabs';
import TrackingDetails from '../screens/TrackingDetails';
import Login from '../screens/Login';

import OrderTab from './OrderTab';
import {RootStackParamList} from './NavTypes';
import {routes} from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeBottomTabs} />
      <Stack.Screen name={routes.ORDER_SCREEN} component={OrderTab} />
      <Stack.Screen
        name={routes.TRACKING_DETAILES_SCREEN}
        component={TrackingDetails}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
