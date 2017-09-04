'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import HomeScreen from './containers/Home' 
import OrdersScreen from './components/OrdersPage'
import LoginScreen from './components/LoginPage'
import RegistrationScreen from './components/RegistrationPage'

const routeConfiguration = {
  Home: { screen: HomeScreen },
  Orders: { screen: OrdersScreen },
  Login: { screen: LoginScreen },
  Registration: { screen: RegistrationScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'Home'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
