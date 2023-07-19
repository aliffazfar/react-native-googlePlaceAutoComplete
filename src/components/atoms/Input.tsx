import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Flex, InputItem} from '@ant-design/react-native';
import {COLORS} from '../../styles';
import {InputItemProps} from '@ant-design/react-native/lib/input-item';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface InputProps extends InputItemProps {
  iconRight?: string;
  iconOnPress?: () => void;
}

export const Input = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Flex
      direction={'row'}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: isFocused ? COLORS.PRIMARY.d2 : COLORS.NEUTRAL.d0,
      }}>
      <Flex.Item>
        <InputItem
          {...props}
          style={[styles.frame]}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      </Flex.Item>
      {props.iconRight ? (
        <Icon
          name={props.iconRight}
          size={20}
          style={styles.iconStyle}
          color={props.value ? COLORS.PRIMARY.d2 : COLORS.NEUTRAL.d3}
          onPress={props.iconOnPress}
        />
      ) : null}
    </Flex>
  );
};

const styles = StyleSheet.create({
  frame: {
    marginHorizontal: -15,
  },
  iconStyle: {
    paddingHorizontal: 10,
  },
});
