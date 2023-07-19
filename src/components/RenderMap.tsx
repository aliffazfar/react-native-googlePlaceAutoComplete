import {StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

interface RenderMapProps {
  placeName: string;
  latitude: number;
  longitude: number;
  style?: ViewStyle;
  onPress?: () => void;
}

export const RenderMap = (props: RenderMapProps) => {
  return (
    <MapView
      scrollEnabled
      zoomEnabled
      style={[styles.map, props.style]}
      region={{
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      onPress={props.onPress}>
      <Marker
        coordinate={{
          latitude: props.latitude,
          longitude: props.longitude,
        }}
        title={props.placeName}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
});
