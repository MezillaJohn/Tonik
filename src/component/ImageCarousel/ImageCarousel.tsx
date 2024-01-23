import {View, FlatList, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import Pagination from '../Pagination/Pagination';
import {slides} from '../../constants/slides';
import CarouselItems from './CarouselItems';
import {moderateScale} from 'react-native-size-matters/extend';

const ImageCarousel = () => {
  const [index, setIndex] = useState<number | null>(0);

  const handleOnViewableItemsChange = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      return setIndex(viewableItems[0].index);
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={item => item.id}
        snapToInterval={moderateScale(255)}
        snapToAlignment="start"
        decelerationRate={'normal'}
        pagingEnabled={true}
        onViewableItemsChanged={handleOnViewableItemsChange}
        viewabilityConfig={viewabilityConfig}
        scrollEventThrottle={0}
        ItemSeparatorComponent={() => (
          <View style={{width: moderateScale(10)}} />
        )}
        renderItem={({item, index: idx}) => {
          const nonVisibile = idx !== index;
          return <CarouselItems nonVisibile={nonVisibile} item={item} />;
        }}
      />
      <View style={{marginTop: moderateScale(40)}}>
        <Pagination data={slides} index={index} />
      </View>
    </View>
  );
};

export default ImageCarousel;
