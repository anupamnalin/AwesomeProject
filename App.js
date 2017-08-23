import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal,
  ToolbarAndroid
  } from 'react-native';

  import Icon from 'react-native-vector-icons/MaterialIcons';


export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
      }
  }

  onBack() {

  }

  render() {
    return (
      <View style={styles.container}>

      <ToolbarAndroid style={{backgroundColor: 'orange', marginTop: 25, height: 60}}>
      <Icon name="keyboard-arrow-left" size={36} color="white" onPress={() => this.onBack.bind(this)}/>
      </ToolbarAndroid>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbarStyle:{
    height: 65,
    flexDirection: 'row',
  backgroundColor: 'orange',
  marginTop: 25
  },
  toolbarView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginRight: 40,
  },
});
