import {View} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import History from '../History/History';
import Dot from '../../../assets/svgs/dot.svg';
import {COLORS, FONTS} from '../../constants/theme';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';

const TrackingSheetDetails = () => {
  return (
    <>
      <View style={styles.bsHeading}>
        <View>
          <AppText style={styles.estText}>Estimate arrives in</AppText>
          <AppText style={styles.estTime}>2h 40m</AppText>
        </View>
        <View>
          <Dot />
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.addWrapper}>
          <AppText style={styles.address}>Sukabumi, Indonesia</AppText>
          <AppText style={styles.receiptNum}>
            No receipt : SCP6653728497
          </AppText>
        </View>

        <View style={styles.addWrapper}>
          <AppText style={styles.address}>2,50 USD</AppText>
          <AppText style={styles.receiptNum}>Postal fee</AppText>
        </View>

        <View style={{paddingBottom: moderateScale(5)}}>
          <AppText style={styles.address}>Bali, Indonesia</AppText>
          <AppText style={styles.receiptNum}>Parcel, 24kg</AppText>
        </View>
      </View>

      <View style={{marginBottom: moderateScale(24)}}>
        <AppText style={styles.history}>History</AppText>
      </View>

      <View style={{position: 'relative'}}>
        <History
          bgColor={COLORS.lightYellow}
          image={require('../../../assets/images/delivery.png')}
        />
        <View style={styles.seperator} />
        <History
          bgColor={COLORS.tabBarColor}
          image={require('../../../assets/images/city.png')}
        />

        <View
          style={[
            styles.seperator,
            {top: moderateScale(144), left: moderateScale(28)},
          ]}
        />
        <History
          bgColor={COLORS.tabBarColor}
          image={require('../../../assets/images/package.png')}
        />

        <View style={{marginBottom: moderateScale(15)}} />
      </View>
    </>
  );
};

export default TrackingSheetDetails;

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

  trackingNum: {
    fontFamily: FONTS.Inter_Medium,
    color: COLORS.darkTwo,
    lineHeight: '24@ms',
    fontSize: '14@ms0.3',
  },
  bsWrapper: {
    paddingHorizontal: '24@ms',
    paddingTop: '14@ms',
  },

  seperator: {
    backgroundColor: '#DFE6ED',
    width: 1.5,
    height: moderateScale(32),
    position: 'absolute',
    top: moderateScale(56),
    left: moderateScale(28),
  },

  bsHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30@ms',
  },

  estText: {
    color: COLORS.textGrayFour,
    marginBottom: '2@ms',
  },
  estTime: {
    fontSize: '24@ms0.3',
    fontFamily: FONTS.Inter_SemiBold,
    color: COLORS.textGrayTwo,
  },

  details: {
    // height: '238@ms',
    backgroundColor: COLORS.lightYellow,
    borderRadius: '24@ms',
    padding: '24@ms',
    marginBottom: '24@ms',
  },

  addWrapper: {
    borderBottomColor: COLORS.darkYellowTow,
    borderBottomWidth: '1@ms',
    paddingBottom: '16@ms',
    marginBottom: '16@ms',
  },
  address: {
    fontSize: '16@ms0.3',
    fontFamily: FONTS.Inter_SemiBold,
    marginBottom: '6@ms',
    color: COLORS.textGrayTwo,
  },
  receiptNum: {
    color: COLORS.textYellowDark,
    fontSize: '12@ms0.3',
  },

  history: {
    fontSize: '16@ms',
    fontFamily: FONTS.Inter_SemiBold,
    color: COLORS.textGrayTwo,
  },
});
