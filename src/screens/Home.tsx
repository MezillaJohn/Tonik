import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import AppHeader from '../component/AppHeader/AppHeader';
import ImageCarousel from '../component/ImageCarousel/ImageCarousel';
import {COLORS} from '../constants/theme';
import OrdersLabel from '../component/OrdersLabel/OrdersLabel';
import AppText from '../component/AppText/AppText';
import {moderateScale} from 'react-native-size-matters/extend';
import LottieView from 'lottie-react-native';

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={{flex: 1}}>
        <View style={style.innerWrapper}>
          <AppHeader />
          <View style={{marginTop: 40}}>
            <ImageCarousel />
          </View>
        </View>

        <View style={{marginTop: moderateScale(25)}}>
          <OrdersLabel />
        </View>

        <View style={style.rider}>
          <LottieView
            style={style.riderImage}
            source={require('../../assets/lottie/biker.json')}
            autoPlay
            loop
          />
          <AppText style={style.riderText}>
            You too can join our{'\n'}Elite squad of E-bikers
          </AppText>
        </View>
      </ScrollView>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  innerWrapper: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(40),
  },

  rider: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },

  riderText: {color: COLORS.textGrayOne, lineHeight: moderateScale(18)},

  riderImage: {width: moderateScale(161), height: moderateScale(161)},
});
