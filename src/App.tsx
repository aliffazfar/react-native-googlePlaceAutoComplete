import {Provider as ReduxProvider} from 'react-redux';
import React from 'react';
import store from './redux/store';
import {Navigation} from './Navigation';
import {Provider as AntProvider} from '@ant-design/react-native';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AntProvider>
        <Navigation />
      </AntProvider>
    </ReduxProvider>
  );
};

export default App;
