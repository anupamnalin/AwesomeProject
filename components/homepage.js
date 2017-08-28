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
  TextInput,
  Dimensions,
  ToastAndroid,
  } from 'react-native';

  import { StackNavigator } from 'react-navigation';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  var {height, width} = Dimensions.get('window');

  var firebase = require('firebase');
  var config = {
    apiKey: "AIzaSyAdx__QxuulyUFzyUJ2O4VV-CokIrsPZPg",
    authDomain: "project-8793135885135970639.firebaseapp.com",
    databaseURL: "https://project-8793135885135970639.firebaseio.com",
    projectId: "project-8793135885135970639",
    storageBucket: "project-8793135885135970639.appspot.com",
    messagingSenderId: "867398835808"
  };

  if (!firebase.apps.length) {
  var app = firebase.initializeApp(config);
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
        showLogin: false,
        email: '',
        password: '',
        showRegister: false,
        name: '',
        emailRegister: '',
        passwordRegister: '',
        confirmPassword: '',
        notLogged: true
      }
      this.onLogin= this.onLogin.bind(this)
      this.signup= this.signup.bind(this)
      this.onRegister= this.onRegister.bind(this)
  }

  static navigationOptions = {
    header: null,
  };

  async signup() {
    if (this.state.emailRegister && this.state.passwordRegister && this.state.confirmPassword) {
      if (this.state.passwordRegister===this.state.confirmPassword) {
      try {
          await firebase.auth()
          .createUserWithEmailAndPassword(this.state.emailRegister, this.state.passwordRegister);
          console.log("Account created");
          this.setState({showRegister: false,
          name: '',
          emailRegister: '',
          passwordRegister: '',
          confirmPassword: ''})
          ToastAndroid.show('Successfully Registered', ToastAndroid.LONG)
      } catch (error) {
          ToastAndroid.show('The email-address is incorrect', ToastAndroid.LONG)
          console.log(error.toString())
      }
    } else {
      ToastAndroid.show('The passwords are different', ToastAndroid.LONG)
    }
  } else {
    ToastAndroid.show('Please fill all the fields to register', ToastAndroid.LONG)
  }
  }

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

  async doLogin() {
    try {
          await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
          this.setState({showLogin: false,
          email: '',
          password: '',
          notLogged: false});
          ToastAndroid.show('You are now logged in.', ToastAndroid.LONG)
          } catch (error) {
              this.setState({response: error.toString()})
              ToastAndroid.show('Please enter correct email and password combination.', ToastAndroid.LONG)
          }
  }

  onCloseRegister() {
    this.setState({showRegister: false})
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./../images/landing-page.png')} resizeMode={Image.resizeMode.contain} style={{height: height-45, width: 480, marginTop: 20}}>
        <View style={styles.textView}>
          <Text style={[styles.heading, {fontSize: 30}]}>Food</Text>
          <Text style={[styles.heading, {fontSize: 50, marginTop: -15}]}>Panda</Text>
          <Text style={[styles.heading, {fontSize: 15}]}>WHAT A TWIST</Text>
          <Text style={[styles.heading, {fontSize: 10, marginTop: 5}]}>The Panda, the iconic long, slim slick of bread, has </Text>
          <Text style={[styles.heading, {fontSize: 10}]}>traditionally one of the most potebnt symbols of french culture.</Text>
          <Text style={[styles.heading, {fontSize: 10}]}>culture.</Text>
        </View>

        {this.state.notLogged?
        <Button
          onPress={this.onLogin}
          title="Login"
          /> : null}

        </Image>

        <View style={{flexDirection: 'row', flex: 1}}>
            <Image source={require('./../images/Logo.jpg')} resizeMode={Image.resizeMode.contain} style={{marginTop: 10, width: 100}} />

            <Image source={require('./../images/Home_Btn_nrm.png')}   style={{ height: 40, backgroundColor: '#ffc04c'}}  resizeMode={Image.resizeMode.contain} />

            <TouchableOpacity onPress={() => navigate('Menu')}>
            <Image source={require('./../images/Menu_Btn_nrm.png')}   style={{height: 40}}  resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Cart')}>
            <Image source={require('./../images/Order_Btn_nrm.png')}   style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Notifications')}>
              <Image source={require('./../images/Notifi_Btn_nrm.png')}  style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>

        </View>

        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.showLogin}
          onRequestClose={() => {console.log("Modal has been closed.")}}>


          <TextInput
            ref={'email'}
            style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5, marginTop: 20}}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            underlineColorAndroid={'transparent'}
            keyboardType="email-address"
            onSubmitEditing={(event) => {this.refs.password.focus()}}
            placeholder={'Enter your email-address'}
          />

          <TextInput
            ref={'password'}
            style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={(event) => {this.refs.password.blur()}}
            placeholder={'Enter your password'}
          />

          <View style={{justifyContent: 'center', alignItems: 'center', margin: 15}}>
          <TouchableOpacity onPress={this.doLogin.bind(this)} style={{width: 200, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
            <Text style={{color: 'white', alignItems: 'center', fontSize: 15}}>LOGIN</Text>
          </TouchableOpacity>
          </View>

            <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
            <TouchableOpacity onPress={this.onRegister} style={{width: 150, height: 20, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{alignItems: 'center', fontSize: 12}}>CLICK HERE TO REGISTER</Text>
            </TouchableOpacity>
            </View>

            <Image source={require('./../images/landing-page.png')} style={{height: height, width: width, marginTop: 20}}>
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
              ref={'emailRegister'}
              style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
              onChangeText={(emailRegister) => this.setState({emailRegister})}
              value={this.state.emailRegister}
              keyboardType="email-address"
              underlineColorAndroid={'transparent'}
              onSubmitEditing={(event) => {this.refs.passwordRegister.focus()}}
              placeholder={'Enter your email-address'}
            />

            <TextInput
              ref={'passwordRegister'}
              style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
              onChangeText={(passwordRegister) => this.setState({passwordRegister})}
              value={this.state.passwordRegister}
              underlineColorAndroid={'transparent'}
              onSubmitEditing={(event) => {this.refs.confirmPassword.focus()}}
              placeholder={'Enter at least 6 character password'}
            />

            <TextInput
              ref={'confirmPassword'}
              style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
              onChangeText={(confirmPassword) => this.setState({confirmPassword})}
              value={this.state.confirmPassword}
              underlineColorAndroid={'transparent'}
              onSubmitEditing={(event) => {this.refs.confirmPassword.blur()}}
              placeholder={'Enter your password again'}
            />

            <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
            <TouchableOpacity onPress={this.signup} style={{width: 200, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
              <Text style={{color: 'white', alignItems: 'center', fontSize: 15}}>REGISTER</Text>
            </TouchableOpacity>
            </View>

            <Image source={require('./../images/landing-page.png')} style={{height: height, width: width, marginTop: 20}}>
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
