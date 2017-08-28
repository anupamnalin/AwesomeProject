import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

export default class MenuScreen extends React.Component {

static navigationOptions = {
  header: null
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Text style={styles.navBarButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.navBarHeader}>Menu</Text>
          <Text style={styles.navBarButton}></Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Welcome to Menu page
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
            <Image source={require('./../images/Logo.jpg')} resizeMode={Image.resizeMode.contain} style={{marginTop: 10, width: 100}} />

            <TouchableOpacity onPress={() => navigate('Home')}>
            <Image source={require('./../images/Home_Btn_nrm.png')}   style={{ height: 40}}  resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Menu')}>
            <Image source={require('./../images/Menu_Btn_nrm.png')}   style={{height: 40, backgroundColor: '#ffc04c'}}  resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Cart')}>
            <Image source={require('./../images/Order_Btn_nrm.png')}   style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Notifications')}>
              <Image source={require('./../images/Notifi_Btn_nrm.png')}  style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
