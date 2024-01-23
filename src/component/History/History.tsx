import {View, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters/extend';
import AppText from '../AppText/AppText';
import {COLORS, FONTS} from '../../constants/theme';

const History = ({image, bgColor}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(32),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: moderateScale(16),
        }}>
        <View
          style={{
            width: moderateScale(56),
            height: moderateScale(56),
            backgroundColor: bgColor,
            borderRadius: moderateScale(100),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: moderateScale(24),
              height: moderateScale(24),
            }}
            source={image}
          />
        </View>
        <View>
          <AppText
            style={{
              color: COLORS.textGrayThree,
              fontFamily: FONTS.Inter_SemiBold,
              marginBottom: moderateScale(8),
            }}>
            In Delivery
          </AppText>
          <AppText style={{color: COLORS.textGrayFour}}>
            Bali, Indonesia
          </AppText>
        </View>
      </View>
      <View>
        <AppText
          style={{
            fontSize: moderateScale(12, 0.3),
            color: COLORS.textGrayFour,
          }}>
          00.00 PM
        </AppText>
      </View>
    </View>
  );
};

export default History;
