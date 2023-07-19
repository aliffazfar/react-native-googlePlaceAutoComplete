import {Image, Text} from 'react-native';
import React from 'react';
import {Flex} from '@ant-design/react-native';
import {IMAGES} from '../../assets';
import {COLORS} from '../../styles';

export const FooterByGoogle = () => {
  return (
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
  );
};
