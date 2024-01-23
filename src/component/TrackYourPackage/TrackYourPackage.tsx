import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constants/theme';
import AppText from '../AppText/AppText';
import ButtonBlack from '../Buttons/ButtonBlack';
import LineOne from '../../../assets/svgs/lineOneSmall.svg';
import LineTwo from '../../../assets/svgs/lineTwoSmall.svg';
import LineThree from '../../../assets/svgs/lineThreeSmall.svg';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters/extend';
import {NavScreenProps} from '../../Navigation/NavTypes';
import {routes} from '../../Navigation/routes';

const TrackYourPackage = () => {
  const {navigate} = useNavigation<NavScreenProps>();

  const handleTrackNow = () => {
    navigate(routes.TRACKING_DETAILES_SCREEN);
  };

  return (
    <View style={style.trackActionWrapper}>
      <View style={style.line}>
        <LineOne height={moderateScale(181.5)} />
      </View>
      <View style={style.line}>
        <LineTwo height={moderateScale(181.5)} />
      </View>
      <View style={style.line}>
        <LineThree height={moderateScale(181.5)} />
      </View>
      <View style={{marginBottom: moderateScale(29)}}>
        <AppText style={style.actionTitle}>Track Your Package</AppText>
        <AppText style={style.actionSubTitle}>
          Enter the receipt number that has{'\n'}been given by the officer
        </AppText>
      </View>

      <View style={{marginBottom: moderateScale(10)}}>
        <TextInput
          placeholder="Enter the receipt number"
          placeholderTextColor={COLORS.borderOne}
          style={style.receiptNumInput}
        />
      </View>
      <View>
        <ButtonBlack inApp title="Track Now" onPress={handleTrackNow} />
      </View>
    </View>
  );
};

export default TrackYourPackage;

const style = StyleSheet.create({
  line: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  trackActionWrapper: {
    backgroundColor: COLORS.lightYellow,
    height: moderateScale(308),
    borderRadius: 32,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(53),
    paddingBottom: moderateScale(32),
  },

  actionTitle: {
    fontSize: moderateScale(18, 0.3),
    lineHeight: moderateScale(24),
    fontFamily: FONTS.Inter_SemiBold,
    marginBottom: moderateScale(8),
  },

  actionSubTitle: {color: COLORS.textYellowDark, lineHeight: moderateScale(20)},
  receiptNumInput: {
    borderColor: COLORS.borderOne,
    borderWidth: 0.5,
    borderRadius: 28,
    height: moderateScale(56),
    paddingHorizontal: moderateScale(34),
    color: COLORS.dark,
  },
});
