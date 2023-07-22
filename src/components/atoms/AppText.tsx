import {Text, TextStyle} from 'react-native';
import React from 'react';

interface AppTextProps {
  text?: string;
  size?: number;
  color?: string;
  style?: TextStyle;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}

export const AppText = (props: AppTextProps) => {
  return (
    <Text
      style={{
        color: props.color,
        fontSize: props.size ? props.size : 12,
        ...props.style,
        textAlign: props.textAlign,
      }}>
      {props.text}
    </Text>
  );
};
