import {
  ActivityIndicator,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../styles';
import {
  PrimaryButton,
  HeaderIcon,
  ListItemsDetails,
  RenderMap,
  detailItem,
} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {fetchPlaceDetail, useAppDispatch} from '../redux';
import {useLocationDetail} from '../hooks';
import {Flex} from '@ant-design/react-native';

interface LocationDetailProps {
  route: {
    params: {
      name: string;
      place_id: string;
    };
  };
}

export const LocationDetail = (props: LocationDetailProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {isLoading, data} = useLocationDetail();

  const {place_id} = props.route.params;

  useEffect(() => {
    dispatch(fetchPlaceDetail(place_id));
  }, []);

  let detailsData: detailItem[] = [];
  let openingFlag: boolean = false;

  if (data) {
    const {formatted_address, opening_hours} = data.result;
    detailsData.push({
      label: 'Address',
      description: formatted_address,
    });
    if (opening_hours) {
      detailsData.push({
        label: 'Operating Hours',
        description: opening_hours.weekday_text.join('\n'),
      });
      openingFlag = opening_hours.open_now;
    }
  }

  const handlePrimaryButton = () => {
    const latitude = data?.result.geometry.location.lat;
    const longitude = data?.result.geometry.location.lng;
    const url =
      Platform.OS === 'ios'
        ? 'maps:' + latitude + ',' + longitude + '?q='
        : 'geo:' + latitude + ',' + longitude + '?q=';
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          const browser_url =
            'https://www.google.de/maps/@' + latitude + ',' + longitude + '?q=';
          return Linking.openURL(browser_url);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Icon name={'arrow-left'} size={20} onPress={() => navigation.goBack()} />
      {isLoading ? (
        <ActivityIndicator animating size={'small'} style={styles.flex1} />
      ) : data ? (
        <View style={styles.flex1}>
          <HeaderIcon title={data.result.name} />
          <RenderMap
            placeName={data.result.name}
            latitude={data.result.geometry.location.lat}
            longitude={data.result.geometry.location.lng}
            style={{marginBottom: 20}}
            onPress={handlePrimaryButton}
          />
          <Flex direction="row">
            <Text
              style={[
                styles.openingText,
                {color: openingFlag ? COLORS.GREEN.d1 : COLORS.PRIMARY.d1},
              ]}>
              {openingFlag ? 'Open' : 'Closed'}
            </Text>
            <Text style={styles.dots}>•</Text>
          </Flex>
          <ListItemsDetails data={detailsData} />
          <PrimaryButton title={'Directions'} onPress={handlePrimaryButton} />
        </View>
      ) : (
        <View style={styles.error}>
          <Text style={{textAlign: 'center'}}>
            {'Oops,\nsomething went wrong'}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.NEUTRAL.d9,
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20,
  },
  openingText: {
    fontSize: 12,
    marginBottom: 10,
  },
  dots: {
    fontSize: 12,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
