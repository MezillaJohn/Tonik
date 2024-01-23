import {View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';

const CarouselItems = ({
  nonVisibile,
  item,
}: {
  nonVisibile: boolean;
  item: {path: ImageSourcePropType};
}) => {
  return (
    <View style={style.imageWrapper}>
      {nonVisibile ? <View style={style.imageOverlay} /> : ''}
      <Image style={style.carouselImage} source={item.path} />
    </View>
  );
};

export default CarouselItems;

const style = ScaledSheet.create({
  imageWrapper: {
    borderRadius: 32,
    width: moderateScale(255),
    height: moderateScale(265),
    backgroundColor: COLORS.tabBarColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(241, 246, 251, 0.8)',
    zIndex: 10000,
    borderRadius: moderateScale(32),
  },

  carouselImage: {width: moderateScale(199), height: moderateScale(229)},
});
