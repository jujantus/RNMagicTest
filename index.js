/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/configureStore';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
import {Provider as PaperProvider} from 'react-native-paper';

enableScreens();

const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
