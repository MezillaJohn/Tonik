import {View, Image} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import {COLORS, FONTS} from '../../constants/theme';
import Arrow from '../../../assets/svgs/greaterThan.svg';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';

const data = [
  {
    id: 1,
    image: require('../../../assets/images/package.png'),
    orderNum: 'SCP9374826473',
    status: 'In the process',
  },

  {
    id: 2,
    image: require('../../../assets/images/delivery.png'),
    orderNum: 'SCP6653728497',
    status: 'In delivery',
  },
];

const TransactionHistory = () => {
  return (
    <View>
      <View>
        <AppText style={style.historyHeading}>Tracking history</AppText>
      </View>

      {data.map(data => (
        <View key={data.id} style={style.historyWrapper}>
          <View style={style.historyInnerWrapper}>
            <View style={style.imageWrapper}>
              <Image style={style.image} source={data.image} />
            </View>
            <View>
              <AppText style={style.orderNum}>{data.orderNum}</AppText>
              <AppText style={style.status}>{data.status}</AppText>
            </View>
          </View>
          <View>
            <Arrow />
          </View>
        </View>
      ))}
    </View>
  );
};

export default TransactionHistory;

const style = ScaledSheet.create({
  historyHeading: {
    color: COLORS.textGrayTwo,
    fontFamily: FONTS.Inter_SemiBold,
    fontSize: moderateScale(16),
    marginBottom: moderateScale(16),
  },

  historyWrapper: {
    marginBottom: moderateScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  historyInnerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: moderateScale(16),
  },

  imageWrapper: {
    backgroundColor: COLORS.tabBarColor,
    borderRadius: 100,
    width: moderateScale(56),
    height: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: moderateScale(24),
    height: moderateScale(24),
  },

  orderNum: {
    fontFamily: FONTS.Inter_Medium,
    color: COLORS.textGrayThree,
    marginBottom: moderateScale(6),
  },
  status: {
    fontFamily: FONTS.Inter_Regular,
    color: COLORS.textGrayFour,
  },
});
