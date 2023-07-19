import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {FooterByGoogle} from './atoms';

interface ListItemsProps {
  data?: Item[];
  onPress(item: Item): void;
}

export interface Item {
  label: string;
  value: string;
}

export const ListItems = (props: ListItemsProps) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={item => item.value}
      renderItem={({item, index}) => (
        <TouchableOpacity key={index} onPress={() => props.onPress(item)}>
          {index > 0 ? (
            <View
              key={index}
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.NEUTRAL.d5,
              }}
            />
          ) : null}
          <Text style={{marginVertical: 13}}>{item.label}</Text>
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<FooterByGoogle />}
    />
  );
};
