import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constants/theme';
import AppText from '../AppText/AppText';
import GoogleIcon from '../../../assets/svgs/googleIcon.svg';
import Right from '../../../assets/svgs/rightArrow.svg';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';

const ButtonBlack = ({
  isLoggin,
  inApp,
  width,
  onPress,
  title,
}: {
  isLoggin?: boolean;
  inApp?: boolean;
  width?: ViewStyle['width'];
  title?: string;
  onPress: () => void;
}) => {
  return (
    <>
      {isLoggin && (
        <Pressable
          onPress={onPress}
          style={[
            style.container,
            {
              width: moderateScale(327),
              columnGap: moderateScale(59),
              paddingHorizontal: moderateScale(12),
            },
          ]}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: moderateScale(32),
              height: moderateScale(32),
              borderRadius: moderateScale(100),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <GoogleIcon width={moderateScale(20)} height={moderateScale(20)} />
          </View>
          <View>
            <AppText
              style={{fontFamily: FONTS.Inter_Medium, color: COLORS.white}}>
              Login with Google
            </AppText>
          </View>
          <View></View>
        </Pressable>
      )}

      {inApp && (
        <Pressable
          onPress={onPress}
          style={[
            style.container,
            {
              paddingHorizontal: moderateScale(29),
              width: width,
              columnGap: moderateScale(21),
            },
          ]}>
          <View>
            <AppText
              style={{fontFamily: FONTS.Inter_Medium, color: COLORS.white}}>
              {title}
            </AppText>
          </View>

          <View>
            <Right />
          </View>
        </Pressable>
      )}
    </>
  );
};

export default ButtonBlack;

const style = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '56@ms',
    borderRadius: '52@ms',
  },
});
