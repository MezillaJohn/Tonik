import {View, Animated} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';

const Pagination = ({
  data,
  index,
}: {
  data: {id: string; path: string}[];
  index: number | null;
}) => {
  return (
    <View style={styles.container}>
      {data?.map((_, idx) => {
        return (
          <Animated.View
            key={idx}
            style={[styles.dot, idx === index && styles.dotActive]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: '10@ms',
  },
  dot: {
    width: '6@ms',
    height: '6@ms',
    borderRadius: '100@ms',
    backgroundColor: '#E5F0FC',
  },

  dotActive: {
    backgroundColor: '#000',
  },
});
