'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, Button } from 'react-native'
var {height, width} = Dimensions.get('window');

const HomePage = ({navigation}) => (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>

        <View>

          <Image source={require('./../../images/landing-page.png')} resizeMode={Image.resizeMode.contain} style={{height: height-60, width: 480}}>

            <View style={{backgroundColor: 'rgba(0,0,0,0)', flexGrow:1, display: 'flex', justifyContent: 'center', marginLeft: 100}}>
              <Text style={{ display: 'flex', fontSize: 30, backgroundColor: 'rgba(0,0,0,0)',  color: 'white'}}>Food</Text>
              <Text style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0)',  color: 'white', fontSize: 50, marginTop: -15}}>Panda</Text>
              <Text style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0)',  color: 'white', fontSize: 15}}>WHAT A TWIST</Text>
              <Text style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0)',  color: 'white', fontSize: 10, marginTop: 5}}>The Panda, the iconic long, slim slick of bread, has </Text>
              <Text style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0)',  color: 'white', fontSize: 10}}>traditionally one of the most potebnt symbols of french culture.</Text>
              <Text style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0)',  color: 'white', fontSize: 10}}>culture.</Text>
            </View>

          <Button
            onPress={() => navigation.navigate('Login')}
            title="Login"
            />

          </Image>

          <View style={{flexDirection: 'row', marginLeft: 65}}>
              <Image source={require('./../../images/Logo.jpg')} resizeMode={Image.resizeMode.contain} style={{marginTop: 10, width: 100}} />

              <Image source={require('./../../images/Home_Btn_nrm.png')}   style={{ height: 40, backgroundColor: '#ffc04c'}}  resizeMode={Image.resizeMode.contain} />

              <Image source={require('./../../images/Menu_Btn_nrm.png')}   style={{height: 40}}  resizeMode={Image.resizeMode.contain} />

              <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
              <Image source={require('./../../images/Order_Btn_nrm.png')}   style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
              </TouchableOpacity>

              <Image source={require('./../../images/Notifi_Btn_nrm.png')}  style={{ height: 40}} resizeMode={Image.resizeMode.contain} />
            </View>

         </View>
       </View>
    )

export default HomePage
