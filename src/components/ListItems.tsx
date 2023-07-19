import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import {COLORS} from '../styles';
import {FooterByGoogle} from './atoms';
import {Flex} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
      keyExtractor={(_, index) => {
        return index.toString();
      }}
      renderItem={({item, index}) => {
        if (item.value) {
          return (
            <TouchableOpacity key={index} onPress={() => props.onPress(item)}>
              {index > 0 ? (
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: COLORS.NEUTRAL.d5,
                  }}
                />
              ) : null}
              <Flex direction={'row'}>
                <Flex.Item>
                  <Text style={{marginVertical: 13}}>{item.label}</Text>
                </Flex.Item>
                <Icon
                  name={'arrow-right'}
                  size={13}
                  style={{paddingLeft: 50}}
                />
              </Flex>
            </TouchableOpacity>
          );
        }
        return <Fragment />;
      }}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<FooterByGoogle />}
    />
  );
};
