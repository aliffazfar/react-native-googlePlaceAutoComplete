import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setMessage, useAppDispatch, useAppSelector} from '../redux';
import {
  ActivityIndicator,
  Button,
  Flex,
  SearchBar,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import {fetchUsers} from '../redux/thunk/functions';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {message, loading, data} = useAppSelector(state => state.message);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <WingBlank>
        <SearchBar
          value={'Kuala Lumpur'}
          placeholder="Search"
          onSubmit={() => {}}
          onChange={() => {}}
          showCancelButton={false}
        />
        <WhiteSpace size="xl" />
        <Button type="primary" onPress={handlePress}>
          Test
        </Button>
        <WhiteSpace size="xl" />
        <Flex>
          <Flex.Item>
            <ActivityIndicator text="Loading..." />
          </Flex.Item>
        </Flex>
      </WingBlank>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
