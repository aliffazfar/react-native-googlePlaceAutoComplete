import {Provider} from 'react-redux';
import React from 'react';
import store from './redux/store';
import {Navigation} from './Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
