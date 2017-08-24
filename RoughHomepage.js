import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  } from 'react-native';

  import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
      }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./images/landing-page.png')} resizeMode={Image.resizeMode.contain} style={{height: 500, width: 480}}>
        <View style={styles.textView}>
          <Text style={[styles.heading, {fontSize: 30}]}>Food</Text>
          <Text style={[styles.heading, {fontSize: 50, marginTop: -15}]}>Panda</Text>
          <Text style={[styles.heading, {fontSize: 15}]}>WHAT A TWIST</Text>
          <Text style={[styles.heading, {fontSize: 10, marginTop: 5}]}>The Panda, the iconic long, slim slick of bread, has </Text>
          <Text style={[styles.heading, {fontSize: 10}]}>traditionally one of the most potebnt symbols of french culture.</Text>
          <Text style={[styles.heading, {fontSize: 10}]}>culture.</Text>
        </View>
        </Image>

        <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={require('./images/Logo.jpg')} resizeMode={Image.resizeMode.contain}
              style={{marginTop: 10, width: 100}} />
            <Image source={require('./images/Home_Btn_nrm.png')}   style={{ height: 40}}  resizeMode={Image.resizeMode.contain} />
            <Image source={require('./images/Menu_Btn_nrm.png')}   style={{height: 40}}  resizeMode={Image.resizeMode.contain} />
            <TouchableOpacity onPress={() => navigate('Cart')}>
            <Image source={require('./images/Order_Btn_nrm.png')}   style={{ height: 40}} resizeMode={Image.resizeMode.contain}
             />
            </TouchableOpacity>
            <Image source={require('./images/Notifi_Btn_nrm.png')}  style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40
  },
  textView: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexGrow:1,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 100,
  },
  heading: {
   display: 'flex',
   fontSize: 20,
   backgroundColor: 'rgba(0,0,0,0)',
   color: 'white',
}
});
