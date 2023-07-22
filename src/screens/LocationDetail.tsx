import {
  ActivityIndicator,
  Linking,
  Platform,
  StyleSheet,
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
  AppText,
} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {fetchPlaceDetail, useAppDispatch} from '../redux';
import {useLocationDetail} from '../hooks';
import {Flex} from '@ant-design/react-native';
import {formatTimeShow} from '../utils';

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
  let openingFlag: boolean | undefined = data?.result?.opening_hours?.open_now;
  let closeTime: string | undefined;

  if (data) {
    const {formatted_address, opening_hours} = data.result;
    detailsData.push({
      label: 'Address',
      description: formatted_address,
    });
    if (opening_hours) {
      const {weekday_text, periods} = opening_hours;
      detailsData.push({
        label: 'Operating Hours',
        description: weekday_text.join('\n'),
      });
      if (periods) {
        const today = new Date().getDay();
        const todayPeriod = periods[today];
        if (todayPeriod && todayPeriod.close) {
          closeTime = formatTimeShow(todayPeriod.close.time);
          closeTime = openingFlag ? `closed at ${closeTime}` : closeTime;
        }
      }
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
            style={styles.map}
            onPress={handlePrimaryButton}
          />
          {openingFlag !== undefined ? (
            <Flex direction="row">
              <AppText
                style={styles.openingText}
                color={openingFlag ? COLORS.GREEN.d1 : COLORS.PRIMARY.d1}
                text={openingFlag ? 'Open' : 'Closed'}
              />
              {closeTime ? (
                <AppText style={styles.dots} text={`• ${closeTime}`} />
              ) : null}
            </Flex>
          ) : null}
          <ListItemsDetails data={detailsData} />
          <PrimaryButton title={'Directions'} onPress={handlePrimaryButton} />
        </View>
      ) : (
        <View style={styles.error}>
          <AppText text={'Oops,\nsomething went wrong'} textAlign={'center'} />
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
    marginBottom: 10,
  },
  dots: {
    marginBottom: 10,
    marginHorizontal: 5,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  map: {
    marginBottom: 20,
  },
});
