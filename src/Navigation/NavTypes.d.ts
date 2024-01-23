import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {routes} from './routes';

export type RootStackParamList = {
  [routes.HOME_SCREEN]: undefined;
  [routes.ORDER_SCREEN]: undefined;
  [routes.TRACKING_DETAILES_SCREEN]: undefined;
  [routes.LOGIN_SCREEN]: undefined;
};

export type NavScreenProps = NativeStackScreenProps<
  RootStackParamList,
  login,
  order,
  trackingDetails,
  home
>;
