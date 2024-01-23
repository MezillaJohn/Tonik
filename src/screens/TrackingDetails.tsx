import {
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {COLORS, FONTS} from '../constants/theme';
import Back from '../../assets/svgs/backArrow.svg';
import AppText from '../component/AppText/AppText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import MapLine from '../../assets/svgs/mapLine.svg';
import TrackingSheetDetails from '../component/TrackingSheetDetails/TrackingSheetDetails';
import {useNavigation} from '@react-navigation/native';

const TrackingDetails = () => {
  const {goBack} = useNavigation();

  const snapPoints = useMemo(() => [moderateScale(120), '88%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop pressBehavior="none" appearsOnIndex={1} {...props} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.tabBarColor}
      />
      <ImageBackground
        style={styles.mapImage}
        resizeMode="cover"
        source={require('../../assets/images/map.png')}>
        <View style={styles.trackingNav}>
          <View style={styles.trackingNavWrapper}>
            <Pressable onPress={() => goBack()}>
              <Back />
            </Pressable>
            <AppText style={styles.trackingNavHeading}>
              Tracking Details
            </AppText>
            <AppText></AppText>
          </View>

          <View style={styles.trackingNumContainer}>
            <View style={styles.innerContainer}>
              <AppText>SCP6653728497</AppText>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <MapLine width={moderateScale(295)} height={moderateScale(171)} />
          </View>
        </View>
      </ImageBackground>
      <BottomSheet
        enablePanDownToClose={false}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          borderRadius: moderateScale(40),
          backgroundColor: COLORS.white,
        }}
        handleIndicatorStyle={{
          backgroundColor: '#DBE2E9',
          width: moderateScale(48),
        }}
        snapPoints={snapPoints}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          style={styles.bsWrapper}>
          <TrackingSheetDetails />
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default TrackingDetails;

const styles = ScaledSheet.create({
  container: {backgroundColor: COLORS.tabBarColor, flex: 1},
  trackingNumContainer: {
    backgroundColor: COLORS.lightYellow,
    height: '88@ms',
    borderRadius: '46@ms',
    justifyContent: 'center',
    padding: '16@ms',
    marginBottom: '125@ms',
  },

  mapImage: {width: '100%', height: '100%', flex: 1},

  innerContainer: {
    height: '56@ms',
    borderColor: COLORS.darkTwo,
    borderWidth: '0.5@ms',
    borderRadius: '28@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trackingNav: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(49),
  },

  trackingNavWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(49),
  },

  trackingNavHeading: {
    fontFamily: FONTS.Inter_SemiBold,
    fontSize: moderateScale(18),
  },

  bsWrapper: {
    paddingHorizontal: '24@ms',
    paddingTop: '14@ms',
  },
});
