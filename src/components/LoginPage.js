'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
 import {attemptLogin} from './../actions/authActions'
 import { connect } from 'react-redux';

  class LoginPage extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
        email: '',
        password: '',
      }
  }
  render() {
    return (
      <View style={{
        flex:1,
      }}>
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
        secureTextEntry={true}
        underlineColorAndroid={'transparent'}
        onSubmitEditing={(event) => {this.refs.password.blur()}}
        placeholder={'Enter your password'}
      />

      <View style={{justifyContent: 'center', alignItems: 'center', margin: 15}}>
      <TouchableOpacity
      onPress={() => this.props.dispatch(attemptLogin(this.state.email, this.state.password))}
      style={{width: 200, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
        <Text style={{color: 'white', alignItems: 'center', fontSize: 15}}>LOGIN</Text>
      </TouchableOpacity>
      </View>

        <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Registration')}
        style={{width: 150, height: 20, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{alignItems: 'center', fontSize: 12}}>CLICK HERE TO REGISTER</Text>
        </TouchableOpacity>
        </View>

        <Image source={require('./../../images/landing-page.png')} style={{height: height, width: width, marginTop: 20}}>
        <View>
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Icon name="close" size={36} color="white"  onPress={() => this.props.navigation.goBack()} />
          </View>
            <Text style={{display: 'flex', backgroundColor: 'rgba(0,0,0,0)',  color: 'white', fontSize: 30, marginTop: 50, marginLeft: 20}}>LOGIN</Text>
        </View>
        </Image>

      </View>
    )
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LoginPage);
