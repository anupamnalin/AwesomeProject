/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

  
import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/homepage'
import CartScreen from './components/cart'

const testProject = StackNavigator({
  Home: { screen: HomeScreen },
  Cart: { screen: CartScreen},
});

AppRegistry.registerComponent('testProject', () => testProject);
