import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './app/reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose( // bunch of different middlewares
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class Food extends Component {
  render() {
    return (
      <View> 
        <Text>
          Welcome
        </Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <Food />
  </Provider>
);

AppRegistry.registerComponent('ReactNativeFood', () => App);
