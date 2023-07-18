import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchPlaces, useAppDispatch, useAppSelector} from '../redux';
import {
  ActivityIndicator,
  Button,
  Flex,
  SearchBar,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {isLoading, data} = useAppSelector(state => state.places);

  const [input, setInput] = useState<string>();

  // useEffect(() => {
  //   if (input) dispatch(fetchPlaces(input));
  // }, [input]);

  const handlePress = () => {};

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <WingBlank>
        <SearchBar
          placeholder="Search"
          value={input}
          onChange={setInput}
          showCancelButton={false}
        />
        <WhiteSpace size="xl" />
        <Button type="primary" onPress={handlePress}>
          {data?.predictions[0].description}
        </Button>
        <WhiteSpace size="xl" />
        <Flex>
          <Flex.Item>
            <ActivityIndicator animating={isLoading} text="Loading..." />
          </Flex.Item>
          <View style={styles.container}>
            <MapView
              // provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
          </View>
        </Flex>
      </WingBlank>
    </SafeAreaView>
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
    ...StyleSheet.absoluteFillObject,
  },
});
