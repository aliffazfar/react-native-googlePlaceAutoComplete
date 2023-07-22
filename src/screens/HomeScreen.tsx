import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {addRecentSearches, fetchPlaces, useAppDispatch} from '../redux';
import {
  AppText,
  HeaderIcon,
  Item,
  ListItems,
  RenderMap,
  SearchLocationInput,
} from '../components';
import {COLORS} from '../styles';
import {IMAGES} from '../assets';
import {useLocationDetail, useQueryPlaces} from '../hooks';
import {defaultLocationData} from '../utils';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useAppDispatch();
  const {data, isLoading, isError} = useQueryPlaces();
  const {recentSearches, recentGeometry} = useLocationDetail();

  const [input, setInput] = useState<string>();

  useEffect(() => {
    if (input) dispatch(fetchPlaces(input));
  }, [input]);

  const placesData: Item[] | undefined = data?.predictions.map(prediction => {
    return {
      label: prediction.description,
      value: prediction.place_id,
    };
  });

  const handleOnPressItem = (item: Item, isFromSearching = false) => {
    if (isFromSearching) {
      dispatch(addRecentSearches(item));
    }
    navigation.navigate('LocationDetail', {
      name: item.label,
      place_id: item.value,
    });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderIcon title={'Navigate Anywhere'} imgURI={IMAGES.PIN_LOCATION} />
      <RenderMap
        placeName={
          recentSearches
            ? recentSearches[0].label
            : 'Malaysian Anti-Corruption Commission (MACC) Headquarters'
        }
        latitude={recentGeometry ? recentGeometry.latitude : 2.9327173}
        longitude={recentGeometry ? recentGeometry.longitude : 101.6753239}
      />
      <SearchLocationInput
        placeholder="Search and discover"
        data={placesData}
        isLoading={isLoading}
        isError={isError}
        value={input}
        onChangeText={setInput}
        onPressItem={handleOnPressItem}
      />
      <AppText
        style={styles.labelText}
        text={recentSearches ? 'Recent searches' : 'Quick lookout'}
      />
      <ListItems
        data={recentSearches ? recentSearches.slice(0, 3) : defaultLocationData}
        onPress={handleOnPressItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.NEUTRAL.d9,
    flex: 1,
    paddingHorizontal: 32,
  },
  labelText: {
    fontSize: 12,
    color: COLORS.NEUTRAL.d3,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
});
