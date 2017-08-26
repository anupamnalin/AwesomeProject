import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  ToolbarAndroid,
  TextInput
  } from 'react-native';

  import { StackNavigator } from 'react-navigation';
  import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
        showLogin: false,
        email: '',
        password: '',
        showRegister: false
      }
  }

  static navigationOptions = {
    header: null,
  };

  onLogin() {
    this.setState({showLogin: true})
  }

  onCloseLogin() {
    this.setState({showLogin: false})
  }

  onRegister() {
    this.state.showLogin= false
    this.state.showRegister= true
    this.setState(this.state)
  }

  doLogin() {

  }


  onCloseRegister() {
    this.setState({showRegister: false})
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./images/landing-page.png')} resizeMode={Image.resizeMode.contain} style={{height: 500, width: 480, marginTop: 45}}>
        <View style={styles.textView}>
          <Text style={[styles.heading, {fontSize: 30}]}>Food</Text>
          <Text style={[styles.heading, {fontSize: 50, marginTop: -15}]}>Panda</Text>
          <Text style={[styles.heading, {fontSize: 15}]}>WHAT A TWIST</Text>
          <Text style={[styles.heading, {fontSize: 10, marginTop: 5}]}>The Panda, the iconic long, slim slick of bread, has </Text>
          <Text style={[styles.heading, {fontSize: 10}]}>traditionally one of the most potebnt symbols of french culture.</Text>
          <Text style={[styles.heading, {fontSize: 10}]}>culture.</Text>
        </View>

        <Button
          onPress={this.onLogin.bind(this)}
          title="Login"
          />

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
            <TouchableOpacity onPress={() => navigate('Notifications')}>
              <Image source={require('./images/Notifi_Btn_nrm.png')}  style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>
        </View>

        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.showLogin}
          onRequestClose={() => {console.log("Modal has been closed.")}}>


          <TextInput
            style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5, marginTop: 20}}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            underlineColorAndroid={'transparent'}
            placeholder={'Enter your email-address'}
          />

          <TextInput
            style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            underlineColorAndroid={'transparent'}
            placeholder={'Enter your password'}
          />

          <View style={{justifyContent: 'center', alignItems: 'center', margin: 15}}>
          <TouchableOpacity onPress={this.doLogin.bind(this)} style={{width: 200, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
            <Text style={{color: 'white', alignItems: 'center', fontSize: 15}}>LOGIN</Text>
          </TouchableOpacity>
          </View>

            <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
            <TouchableOpacity onPress={this.onRegister.bind(this)} style={{width: 150, height: 20, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{alignItems: 'center', fontSize: 10}}>CLICK HERE TO REGISTER</Text>
            </TouchableOpacity>
            </View>

            <Image source={require('./images/landing-page.png')} style={{height: 300, width: 480, marginTop: 80}}>
            <View>
              <View style={{marginLeft: 10, marginTop: 10}}>
                <Icon name="close" size={36} color="white"  onPress={() => this.onCloseLogin()} />
              </View>
                <Text style={[styles.heading, {fontSize: 30, marginTop: 50, marginLeft: 20}]}>LOGIN</Text>
            </View>
            </Image>


          </Modal>

          <Modal
            animationType={"fade"}
            transparent={false}
            visible={this.state.showRegister}
            onRequestClose={() => {console.log("Modal has been closed.")}}>

            <TextInput
              style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5, marginTop: 20}}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              underlineColorAndroid={'transparent'}
              placeholder={'Enter your name'}
            />

            <TextInput
              style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              underlineColorAndroid={'transparent'}
              placeholder={'Enter your email-address'}
            />

            <TextInput
              style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              underlineColorAndroid={'transparent'}
              placeholder={'Enter your password'}
            />

            <TextInput
              style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              underlineColorAndroid={'transparent'}
              placeholder={'Enter your password again'}
            />

            <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
            <TouchableOpacity onPress={this.doLogin.bind(this)} style={{width: 200, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
              <Text style={{color: 'white', alignItems: 'center', fontSize: 15}}>REGISTER</Text>
            </TouchableOpacity>
            </View>

            <Image source={require('./images/landing-page.png')} style={{height: 300, width: 480, marginTop: 10}}>
            <View>
              <View style={{marginLeft: 10, marginTop: 10}}>
                <Icon name="close" size={36} color="white"  onPress={() => this.onCloseRegister()} />
              </View>
                <Text style={[styles.heading, {fontSize: 30, marginTop: 50, marginLeft: 20}]}>REGISTER</Text>
            </View>
            </Image>

            </Modal>

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
