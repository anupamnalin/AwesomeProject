import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ToolbarAndroid
  } from 'react-native';

  import Icon from 'react-native-vector-icons/MaterialIcons';


export default class CartScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
      }
  }

  onBack() {
    this.props.navigation.pop()
  }

  static navigationOptions = {
    header: null,
  };


  onCompleteOrder() {

  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>

      <View style={styles.toolbarView}>
        <View style={{}}>
          <Icon name="keyboard-arrow-left" size={36} color="white"  onPress={() => goBack()} />
        </View>
        <View>
          <Text style={{color: 'white', fontSize:16, textAlign: 'center'}}>Cart</Text>
        </View>
        <View style={{marginRight: 10}}>
          <Icon name="shopping-cart" size={26} color="white" onPress={() => this.onBack.bind(this)}/>
        </View>
      </View>

      <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
        <Text style={{fontSize: 10, color: 'grey'}}>MOETS CURRY LEAF</Text>
        <Text style={{fontSize: 10}}>$2.99</Text>
      </View>

      <View style={{margin: 5, flexDirection: 'row', borderWidth: .25, backgroundColor: 'white'}}>
      <Image source={require('./images/imgmenu1.png')}
        style={{height: 50, width: 50, margin: 5}} />
      <View style={{margin: 5}}>
        <Text style={{color: 'grey'}}>Noodle Soup</Text>
        <Text style={{fontSize: 10, color: 'grey'}}>Boiled noodle served in a pot with broth</Text>
      </View>
      <Text style={{marginTop: 24, fontSize: 10, marginLeft: 5, color: 'grey'}}>$2.99</Text>
      <View style={{marginLeft: 10, flexDirection: 'row'}}>
      <Icon name="remove-circle-outline" size={15} style={{marginTop: 24, marginLeft: 10}} onPress={() => this.onBack.bind(this)}/>
      <Text style={{marginTop: 24, fontSize: 10, marginLeft: 5}}>1</Text>
      <Icon name="add-circle-outline" size={15} style={{marginTop: 24, marginLeft: 10}} onPress={() => this.onBack.bind(this)}/>
      </View>
      </View>

      <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
        <Text style={{fontSize: 10, color: 'grey'}}>CAFE 5H BY THE KITCHEN</Text>
        <Text style={{fontSize: 10}}>$15.99</Text>
      </View>

      <View style={{margin: 5, flexDirection: 'row', borderWidth: .25, backgroundColor: 'white'}}>
      <Image source={require('./images/imgmenu11.png')}
        style={{height: 50, width: 50, margin: 5}} />
      <View style={{margin: 5}}>
        <Text style={{color: 'grey'}}>Veg Mixed Fried Rice</Text>
        <Text style={{fontSize: 10, color: 'grey'}}>Boiled noodle served in a pot with broth</Text>
      </View>
      <Text style={{marginTop: 24, fontSize: 10, marginLeft: 5, color: 'grey'}}>$10.00</Text>
      <View style={{marginLeft: 10, flexDirection: 'row'}}>
      <Icon name="remove-circle-outline" size={15} style={{marginTop: 24, marginLeft: 10}} onPress={() => this.onBack.bind(this)}/>
      <Text style={{marginTop: 24, fontSize: 10, marginLeft: 5}}>1</Text>
      <Icon name="add-circle-outline" size={15} style={{marginTop: 24, marginLeft: 10}} onPress={() => this.onBack.bind(this)}/>
      </View>
      </View>

      <View style={{margin: 5, flexDirection: 'row', borderWidth: .25, backgroundColor: 'white'}}>
      <Image source={require('./images/imgmenu3.png')}
        style={{height: 50, width: 50, margin: 5}} />
      <View style={{margin: 5}}>
        <Text style={{color: 'grey'}}>Paneer Tikka</Text>
        <Text style={{fontSize: 10, color: 'grey'}}>Boiled noodle served in a pot with broth</Text>
      </View>
      <Text style={{marginTop: 24, fontSize: 10, marginLeft: 5, color: 'grey'}}>$5.99</Text>
      <View style={{marginLeft: 10, flexDirection: 'row'}}>
      <Icon name="remove-circle-outline" size={15} style={{marginTop: 24, marginLeft: 10}} onPress={() => this.onBack.bind(this)}/>
      <Text style={{marginTop: 24, fontSize: 10, marginLeft: 5}}>1</Text>
      <Icon name="add-circle-outline" size={15} style={{marginTop: 24, marginLeft: 10}} onPress={() => this.onBack.bind(this)}/>
      </View>
      </View>

      <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
        <Text style={{fontSize: 10}}>SUB TOTAL</Text>
        <Text style={{fontSize: 10}}>$15.99</Text>
      </View>

      <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
        <Text style={{fontSize: 10}}>SERVICE TAX(15%)</Text>
        <Text style={{fontSize: 10}}>$15.99</Text>
      </View>

      <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
        <Text style={{fontSize: 10}}>TOTAL</Text>
        <Text style={{fontSize: 10}}>$15.99</Text>
      </View>

      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', margin: 5}}>
      <TouchableOpacity onPress={this.onCompleteOrder.bind(this)} style={{width: 150, height: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
        <Text style={{color: 'white', alignItems: 'center', fontSize: 10}}>COMPLETE ORDER</Text>
      </TouchableOpacity>
      </View>

      <View style={{backgroundColor: 'white'}}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
        <Text style={{fontSize: 10}}>YOU MAY ALSO LIKE</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{marginLeft: 5}}>
      <View>
        <Image source={require('./images/imgmenu1.png')} style={{height: 50, width: 120}} />
      </View>
        <Text style={{fontSize: 5}}>CAFE 5H BY THE KITCHEN</Text>
        <Text style={{fontSize: 5}}>Lawrence Road. Casual Dining</Text>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
          <Text style={{fontSize: 5}}>Open now</Text>
          <Text style={{fontSize: 5}}></Text>
        </View>
        </View>

        <View>
        <View>
        <Image source={require('./images/imgmenu2.png')}
          style={{height: 50, width: 120}} />
        </View>
          <Text style={{fontSize: 5}}>CAFE 5H BY THE KITCHEN</Text>
          <Text style={{fontSize: 5}}>Lawrence Road. Casual Dining</Text>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
            <Text style={{fontSize: 5}}>Open now</Text>
            <Text style={{fontSize: 5}}></Text>
          </View>
          </View>

          <View style={{marginRight: 10}}>
          <View>
          <Image source={require('./images/imgmenu3.png')}
            style={{height: 50, width: 120}} />
          </View>
            <Text style={{fontSize: 5}}>CAFE 5H BY THE KITCHEN</Text>
            <Text style={{fontSize: 5}}>Lawrence Road. Casual Dining</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', margin: 5}}>
              <Text style={{fontSize: 5}}>Open now</Text>
              <Text style={{fontSize: 5}}></Text>
            </View>
            </View>
          </View>
          </View>

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
    backgroundColor: '#f2f2f2'
  },
  toolbarView: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 25,
    height: 40,
  },
});
