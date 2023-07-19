import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, LocationDetail} from './screens';

export type StackParamList = {
  Home: undefined;
  LocationDetail: {
    name: string;
    place_id: string;
  };
};

export const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LocationDetail" component={LocationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
