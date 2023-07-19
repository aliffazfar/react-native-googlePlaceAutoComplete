import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';

interface ListItemsDetailsProps {
  data?: detailItem[];
}

export interface detailItem {
  label: string;
  description: string;
}

export const ListItemsDetails = (props: ListItemsDetailsProps) => {
  return (
    <FlatList
      bounces={false}
      data={props.data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item, index}) => (
        <View>
          {index > 0 ? (
            <View
              key={index}
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.NEUTRAL.d5,
                marginVertical: 15,
              }}
            />
          ) : null}
          <Text
            style={{fontSize: 12, marginBottom: 5, color: COLORS.NEUTRAL.d2}}>
            {item.label}
          </Text>
          <Text style={{fontSize: 14, lineHeight: 18}}>{item.description}</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
