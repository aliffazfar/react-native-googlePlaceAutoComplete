import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppText} from './AppText';

interface HeaderIconProps {
  title: string;
  imgURI?: ImageSourcePropType;
}

export const HeaderIcon = (props: HeaderIconProps) => {
  return (
    <View style={styles.header}>
      <AppText style={styles.headerText} text={props.title} />
      {props.imgURI ? (
        <Image source={props.imgURI} style={styles.headerImg} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  headerText: {
    fontSize: 26,
    flex: 1,
    paddingRight: 30,
    alignSelf: 'center',
  },
  headerImg: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
});
