'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegistrationPage = ({navigation}) => (
        <View style={{
        flex:1,
      }}>
      <TextInput
    //    ref={'emailRegister'}
        style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
    //    onChangeText={(emailRegister) => this.setState({emailRegister})}
    //    value={this.state.emailRegister}
        keyboardType="email-address"
        underlineColorAndroid={'transparent'}
    //    onSubmitEditing={(event) => {this.refs.passwordRegister.focus()}}
        placeholder={'Enter your email-address'}
      />

      <TextInput
    //    ref={'passwordRegister'}
        style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
    //    onChangeText={(passwordRegister) => this.setState({passwordRegister})}
    //    value={this.state.passwordRegister}
        underlineColorAndroid={'transparent'}
    //    onSubmitEditing={(event) => {this.refs.confirmPassword.focus()}}
        placeholder={'Enter at least 6 character password'}
      />

      <TextInput
    //    ref={'confirmPassword'}
        style={{borderWidth: 1,  margin: 10, fontSize: 15, padding: 5}}
    //    onChangeText={(confirmPassword) => this.setState({confirmPassword})}
    //    value={this.state.confirmPassword}
        underlineColorAndroid={'transparent'}
    //    onSubmitEditing={(event) => {this.refs.confirmPassword.blur()}}
        placeholder={'Enter your password again'}
      />

      <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
      <TouchableOpacity
    //  onPress={this.signup}
      style={{width: 200, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
        <Text style={{color: 'white', alignItems: 'center', fontSize: 15}}>REGISTER</Text>
      </TouchableOpacity>
      </View>

      <Image source={require('./../../images/landing-page.png')} style={{height: height, width: width, marginTop: 20}}>
      <View>
        <View style={{marginLeft: 10, marginTop: 10}}>
          <Icon name="close" size={36} color="white"  onPress={() => navigation.navigate('Home')} />
        </View>
          <Text style={{display: 'flex', backgroundColor: 'rgba(0,0,0,0)',  color: 'white', fontSize: 30, marginTop: 50, marginLeft: 20}}>REGISTER</Text>
      </View>
      </Image>

      </View>
    )

    export default RegistrationPage
