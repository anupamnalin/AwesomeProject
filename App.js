import React from 'react';
import {  AppRegistry  } from 'react-native';

  import { StackNavigator } from 'react-navigation';
  import HomeScreen from './RoughHomepage'
  import CartScreen from './RoughCart'
  import NotificationsScreen from './Notifications'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Cart: { screen: CartScreen},
  Notifications: { screen: NotificationsScreen }
});

export default App;
