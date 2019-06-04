import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';

export default class HomeScreen extends Component {
    render() {
      return(
        <View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center', height: '100%' , width: '100%' , backgroundColor: 'black'}}>
          <Text style={{fontSize: 40 , color: 'white' , fontWeight: 'bold'}}>Welcome to Global pic</Text>
          <Button 
            title="Best pictures"
            style={{marginTop: 20}}
            onPress = { () => this.props.navigation.navigate('Details')}
            />
        </View>
      ) 
    }
  }