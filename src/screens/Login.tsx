import {View, SafeAreaView, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants/theme';
import LineOne from '../../assets/svgs/lineOne.svg';
import LineTwo from '../../assets/svgs/lineTwo.svg';
import LineThree from '../../assets/svgs/lineThree.svg';
import LoginImage from '../../assets/svgs/loginImage.svg';
import IndicatorOne from '../../assets/svgs/carouselIconOne.svg';
import AppText from '../component/AppText/AppText';
import ButtonBlack from '../component/Buttons/ButtonBlack';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import AppScreen from '../component/AppScreen/AppScreen';
import {NavScreenProps} from '../Navigation/NavTypes';
import {routes} from '../Navigation/routes';

const width = Dimensions.get('window').width;

const Login = ({navigation}: {navigation: NavScreenProps}) => {
  const handleLoginNavigation = () => {
    navigation.navigate(routes.HOME_SCREEN);
  };

  return (
    <SafeAreaView style={style.loginContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.dark} />
      <View style={[style.loginContainer, {position: 'relative'}]}>
        <View style={style.innerBackground}></View>
        <View style={style.line}>
          <LineOne height={moderateScale(181.5)} />
        </View>
        <View style={style.line}>
          <LineTwo height={moderateScale(181.5)} />
        </View>
        <View style={style.line}>
          <LineThree height={moderateScale(181.5)} />
        </View>

        <View style={style.main}>
          <View style={style.loginImage}>
            <LoginImage
              width={moderateScale(322.52)}
              height={moderateScale(237.36)}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <AppText style={style.carouselTextHeading}>
              Welcome to E-Bikes
            </AppText>
            <AppText style={style.carouselTextSubHeading}>
              Buying Electric bikes just got a lot easier, {'\n'} Try us today.
            </AppText>
            <View>
              <IndicatorOne
                width={moderateScale(50)}
                height={moderateScale(6)}
              />
            </View>
          </View>
          <View style={style.btnWrapper}>
            <ButtonBlack onPress={handleLoginNavigation} isLoggin />
          </View>

          <View style={style.noAccWrapper}>
            <AppText
              style={[
                style.noAcc,
                {
                  color: COLORS.textYellowDark,
                },
              ]}>
              Don't have any account?{' '}
              <AppText
                style={[
                  style.noAcc,
                  {
                    color: COLORS.textDarkTwo,
                  },
                ]}>
                Sign Up
              </AppText>
            </AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const style = ScaledSheet.create({
  loginContainer: {
    backgroundColor: COLORS.lightYellow,
    flex: 1,
    position: 'relative',
    paddingBottom: '28@ms',
  },

  innerBackground: {
    backgroundColor: COLORS.darkYellow,
    position: 'absolute',
    left: 0,
    top: 0,
    width: width * 0.82,
    height: '556@ms',
    borderTopRightRadius: '240@ms',
    borderBottomRightRadius: '240@ms',
  },

  line: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  loginImage: {
    marginBottom: '96.64@ms',
    marginTop: '135@ms',
  },

  carouselTextHeading: {
    fontFamily: FONTS.Inter_SemiBold,
    fontSize: '24@ms0.3',
    textAlign: 'center',
    color: COLORS.textDarkOne,
    lineHeight: '32@ms',
    marginBottom: '8@ms',
  },
  carouselTextSubHeading: {
    textAlign: 'center',
    color: COLORS.textYellowDark,
    lineHeight: '24@ms',
    marginBottom: '24@ms',
  },

  btnWrapper: {
    marginTop: moderateScale(48),
    paddingHorizontal: moderateScale(24),
  },

  noAccWrapper: {marginTop: moderateScale(48)},

  noAcc: {
    fontFamily: FONTS.Inter_Medium,
  },
});
