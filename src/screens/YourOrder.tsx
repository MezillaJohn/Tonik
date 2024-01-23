import {View, Text} from 'react-native';
import React from 'react';
import AppScreen from '../component/AppScreen/AppScreen';
import AppHeader from '../component/AppHeader/AppHeader';
import TrackYourPackage from '../component/TrackYourPackage/TrackYourPackage';
import TransactionHistory from '../component/TransactionHistory/TransactionHistory';
import {moderateScale} from 'react-native-size-matters/extend';

const YourOrder = () => {
  return (
    <AppScreen scrollview>
      <View style={{marginBottom: moderateScale(40)}}>
        <AppHeader />
        <View style={{marginTop: moderateScale(37)}}>
          <TrackYourPackage />
        </View>

        <View style={{marginTop: moderateScale(40)}}>
          <TransactionHistory />
        </View>
      </View>
    </AppScreen>
  );
};

export default YourOrder;
