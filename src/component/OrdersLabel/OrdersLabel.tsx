import {View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AppText from '../AppText/AppText';
import ButtonBlack from '../Buttons/ButtonBlack';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../Navigation/routes';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import {NavScreenProps} from '../../Navigation/NavTypes';

const OrdersLabel = () => {
  const {navigate} = useNavigation<NavScreenProps>();

  const handleYourOrderNavigation = () => {
    navigate(routes.ORDER_SCREEN);
  };

  return (
    <View style={style.labelWrapper}>
      <AppText style={style.labelText}>Gotten your{'\n'}E-Bike yet?</AppText>
      <ButtonBlack
        title="Your Order"
        onPress={handleYourOrderNavigation}
        inApp
        width={moderateScale(183)}
      />
    </View>
  );
};

export default OrdersLabel;

const style = ScaledSheet.create({
  labelWrapper: {
    height: moderateScale(109),
    backgroundColor: COLORS.lightYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: moderateScale(54),
    paddingHorizontal: moderateScale(27),
  },

  labelText: {lineHeight: moderateScale(18), color: COLORS.textYellowDark},
});
