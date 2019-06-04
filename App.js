
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SliderScreen  from './SliderScreen';
import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: SliderScreen
  },
  {
    initialRouteName: 'Home'
  }
);
const Application = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}
