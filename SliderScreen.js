import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';

export default class SliderScreen extends Component {
    render() {
      return(
        <View style={{ flex: 1, alignItems: 'center', height: '100%' , width: '100%' , backgroundColor: 'black'}}>
          <Text style={{fontSize: 50 , marginTop: 20, color: 'white' , fontWeight: 'bold'}}>Best pictures</Text>
        </View>
      ) 
    }
  }