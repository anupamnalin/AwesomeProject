'use strict'

// React
import React from 'react'
import { AppRegistry } from 'react-native'

// Redux
import { Provider } from 'react-redux'
import store from './src/store'

// Navigation
import TabOneNavigation from './src/TabOneNavigation'

class testProject extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <TabOneNavigation />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('testProject', () => testProject)
