import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchPlaceDetail, fetchPlaces, useAppDispatch} from '../redux';
import {Item, ListItems, RenderMap, SearchLocationInput} from '../components';
import {COLORS} from '../styles';
import {IMAGES} from '../assets';
import {useQueryPlaces} from '../hooks';
import {defaultLocationData} from '../utils';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {isLoading, data} = useQueryPlaces();

  const [input, setInput] = useState<string>();

  useEffect(() => {
    // if (input) dispatch(fetchPlaces(input));
  }, [input]);

  useEffect(() => {
    // dispatch(fetchPlaceDetail(defaultLocationData[1].value));
  }, []);

  let placesData: Item[] | undefined = data?.predictions.map(prediction => {
    return {
      label: prediction.description,
      value: prediction.place_id,
    };
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Navigate Anywhere</Text>
        <Image source={IMAGES.PIN_LOCATION} style={styles.headerImg} />
      </View>
      <RenderMap
        placeName={'Kuala Lumpur City Centre'}
        latitude={3.1466}
        longitude={101.6958}
      />
      <SearchLocationInput
        data={placesData}
        isLoading={isLoading}
        placeholder="Search and discover"
        value={input}
        onChangeText={setInput}
      />
      <Text style={styles.labelText}>Quick lookout</Text>
      <ListItems data={defaultLocationData} onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.NEUTRAL.d9,
    flex: 1,
    paddingHorizontal: 32,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  headerText: {
    fontSize: 26,
    flex: 1,
    paddingRight: 30,
    alignSelf: 'center',
  },
  headerImg: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
