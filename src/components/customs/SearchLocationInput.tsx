import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {COLORS} from '../../styles';
import {Flex, Modal, WhiteSpace} from '@ant-design/react-native';
import {FooterByGoogle, Input, InputProps} from '../atoms';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Item, ListItems} from '../ListItems';

const screenHeight = Dimensions.get('screen').height;

interface SearchLocationInputProps extends InputProps {
  data?: Item[];
  isLoading: boolean;
  isError: boolean;
  onPressItem: (item: Item) => void;
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
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.wrapper}>
        <Flex direction="row-reverse" style={styles.flexContainer}>
          <Icon name="search" size={20} style={styles.icon} />
          <Text style={styles.placeholder}>{props.placeholder}</Text>
        </Flex>
      </TouchableOpacity>
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
            <ActivityIndicator animating style={styles.loading} />
          ) : props.value ? (
            <ListItems
              data={props.data}
              onPress={item => {
                setModalVisible(false);
                props.onPressItem(item);
              }}
            />
          ) : (
            <FooterByGoogle />
          )}
          {props.isError ? (
            <View style={styles.error}>
              <Text style={{textAlign: 'center'}}>
                {'Oops,\nsomething went wrong'}
              </Text>
            </View>
          ) : null}
        </View>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
  },
  flexContainer: {
    marginTop: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  placeholder: {
    marginVertical: 10,
    color: COLORS.NEUTRAL.d4,
    fontSize: 16,
    flex: 1,
  },
  modalContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 32,
  },
  modalFrame: {
    height: screenHeight / 1.3,
    marginTop: 20,
  },
  loading: {
    paddingBottom: 10,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
