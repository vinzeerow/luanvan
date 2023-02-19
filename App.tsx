// npm install --save axios 
// npm install --save react-navigation
// npm install --save react-router-native
// npm install --save react-native-vector-icons
// npx pod-install
import 'react-native-gesture-handler'
import React, { Component } from 'react';
import AppNavigator from './components/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}


