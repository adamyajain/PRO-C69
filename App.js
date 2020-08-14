import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScanScreen from './screens/ScanScreen';
import { render } from 'react-dom';

export default class App extends React.Component {
  render(){
    return (
    <AppContainer/>
   );
 }
}

const TabNavigator = createBottomTabNavigator({
  Scan: {screen: ScreenScreen},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
