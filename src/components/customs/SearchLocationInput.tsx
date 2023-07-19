import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {COLORS} from '../../styles';
import {
  ActivityIndicator,
  Flex,
  Modal,
  WhiteSpace,
} from '@ant-design/react-native';
import {IMAGES} from '../../assets';
import {Input, InputProps} from '../atoms';
import Icon from 'react-native-vector-icons/FontAwesome5';

const screenHeight = Dimensions.get('screen').height;

interface SearchLocationInputProps extends InputProps {
  data?: SearchInputData[];
  isLoading?: boolean;
}

export interface SearchInputData {
  label: string;
  value: string;
}

export const SearchLocationInput = (props: SearchLocationInputProps) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleIconPress = () => {
    if (props.value && props.onChangeText) {
      props.onChangeText('');
    } else {
      setModalVisible(false);
    }
  };

  return (
    <Fragment>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{borderBottomWidth: 1}}>
        <Flex direction="row-reverse" style={{marginTop: 10}}>
          <Icon name="search" size={20} style={{paddingHorizontal: 10}} />
          <Text
            style={{
              marginVertical: 10,
              color: COLORS.NEUTRAL.d4,
              fontSize: 16,
              flex: 1,
            }}>
            {props.placeholder}
          </Text>
        </Flex>
      </Pressable>
      <Modal
        popup
        visible={isModalVisible}
        animationType="slide-up"
        onClose={() => setModalVisible(false)}
        style={styles.modalContainer}>
        <View style={styles.modalFrame}>
          <Input
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            iconRight={'times-circle'}
            iconOnPress={handleIconPress}
          />
          <WhiteSpace size="xl" />
          {props.isLoading ? (
            <ActivityIndicator animating={props.isLoading} />
          ) : (
            <FlatList
              data={props.data}
              keyExtractor={item => item.value}
              renderItem={({item, index}) => (
                <Pressable key={index} onPress={() => setModalVisible(false)}>
                  {index > 0 ? (
                    <View
                      style={{
                        borderWidth: 0.5,
                        borderColor: COLORS.NEUTRAL.d5,
                      }}
                    />
                  ) : null}
                  <Text style={{marginVertical: 13}}>{item.label}</Text>
                </Pressable>
              )}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => (
                <Flex direction="row-reverse" style={{marginTop: 10}}>
                  <Image source={IMAGES.GOOGLE_LOGO} />
                  <Text
                    style={{
                      color: COLORS.NEUTRAL.d4,
                      fontSize: 11,
                      marginRight: 5,
                    }}>
                    powered by
                  </Text>
                </Flex>
              )}
            />
          )}
        </View>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 32,
  },
  modalFrame: {
    height: screenHeight / 1.3,
    marginTop: 20,
  },
});
