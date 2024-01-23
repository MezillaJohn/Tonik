import {Platform, Text, TextProps} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import React from 'react';
import {moderateScale} from 'react-native-size-matters/extend';

/**
 * @default fontsize-16
 * @default color-colors.black
 * @default fontfamily-inter_400
 */

const AppText = ({children, style, ...otherProps}: TextProps) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        {
          letterSpacing: 0.5,
          fontSize: moderateScale(14, 0.3),
          color: COLORS.dark,
          fontFamily: FONTS.Inter_Regular,
          // lineHeight: 24,
        },
        style,
      ]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
