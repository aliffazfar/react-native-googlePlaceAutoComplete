import {ButtonProps} from 'react-native';
import React from 'react';
import {Button as AntButton} from '@ant-design/react-native';
import {COLORS} from '../../styles';

export interface PrimaryButtonProps extends ButtonProps {
  title: string;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <AntButton
      {...props}
      style={{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.NEUTRAL.d0,
      }}>
      {props.title}
    </AntButton>
  );
};
