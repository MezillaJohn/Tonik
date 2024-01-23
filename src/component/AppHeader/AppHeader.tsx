import {View, Image} from 'react-native';
import React from 'react';
import NotificationIcon from '../../../assets/svgs/Notification.svg';
import {COLORS, FONTS} from '../../constants/theme';
import AppText from '../AppText/AppText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';

const AppHeader = () => {
  return (
    <View>
      <View style={style.headerContainer}>
        <View>
          <Image
            source={require('../../../assets/images/user.png')}
            style={style.userImage}
            resizeMode="cover"
          />
        </View>
        <View style={style.notificationWrapper}>
          <NotificationIcon
            width={moderateScale(20)}
            height={moderateScale(23)}
          />
        </View>
      </View>

      <AppText style={style.greeting}>Hello good Morning!</AppText>
    </View>
  );
};

export default AppHeader;

const style = ScaledSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(24),
  },

  userImage: {
    borderRadius: 1000,
    height: moderateScale(48),
    width: moderateScale(48),
  },

  notificationWrapper: {
    width: moderateScale(40),
    height: moderateScale(40),
    backgroundColor: COLORS.tabBarColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greeting: {
    fontFamily: FONTS.Inter_Bold,
    fontSize: moderateScale(18, 0.3),
    color: COLORS.textDarkThree,
  },
});
