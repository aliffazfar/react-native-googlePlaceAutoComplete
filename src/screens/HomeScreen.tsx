import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchPlaces, useAppDispatch, useAppSelector} from '../redux';
import {WhiteSpace} from '@ant-design/react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SearchInputData, SearchLocationInput} from '../components';
import {COLORS} from '../styles';
import {IMAGES} from '../assets';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {isLoading, data} = useAppSelector(state => state.places);

  const [input, setInput] = useState<string>();

  useEffect(() => {
    // if (input) dispatch(fetchPlaces(input));
  }, [input]);

  let placesData: SearchInputData[] | undefined = data?.predictions.map(
    prediction => {
      return {
        label: prediction.description,
        value: prediction.place_id,
      };
    },
  );

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: COLORS.NEUTRAL.d9,
          flex: 1,
          paddingHorizontal: 32,
        }}>
        <View style={{flexDirection: 'row', marginVertical: 30}}>
          <Text style={{fontSize: 28, flex: 1}}>Navigate Anywhere</Text>
          <Image
            source={IMAGES.PIN_LOCATION}
            style={{
              width: 60,
              height: 60,
              marginHorizontal: 20,
              alignSelf: 'center',
            }}
          />
        </View>
        <MapView
          // provider={PROVIDER_GOOGLE}
          scrollEnabled
          zoomEnabled
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="blablabla"
          />
        </MapView>
        <WhiteSpace size="xl" />
        <SearchLocationInput
          data={placesData}
          isLoading={isLoading}
          placeholder="Search here"
          value={input}
          onChangeText={setInput}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: 200,
    borderRadius: 20,
  },
});
