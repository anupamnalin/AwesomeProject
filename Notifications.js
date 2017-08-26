import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export default class NotificationsScreen extends React.Component {

static navigationOptions = {
  header: null
}

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>Back</Text>
          <Text style={styles.navBarHeader}>Awesome App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Welcome to Awesome App!
          </Text>
        </View>

        <View style={styles.tabBar}>
          <View style={[styles.tabBarButton, styles.button1]} />
          <View style={[styles.tabBarButton, styles.button2]} />
          <View style={[styles.tabBarButton, styles.button3]} />
          <View style={[styles.tabBarButton, styles.button4]} />
          <View style={[styles.tabBarButton, styles.button5]} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#1EAAF1',
    height: 60,
    alignItems: 'center'
  },
  navBarButton: {
    width: 60,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  navBarHeader: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBar: {
    height: 50,
    flexDirection: 'row'
  },
  tabBarButton: {
    flex: 1
  },
  button1: { backgroundColor: '#8BC051' },
  button2: { backgroundColor: '#CCD948' },
  button3: { backgroundColor: '#FDE84D', flex: 2 },
  button4: { backgroundColor: '#FCBF2E' },
  button5: { backgroundColor: '#FC9626' }
});
