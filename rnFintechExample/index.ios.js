/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FinTechApp from './src/FinTechApp';

export default class rnFintechExample extends Component {
  render() {
    return (
      <FinTechApp />
    );
  }
}
AppRegistry.registerComponent('rnFintechExample', () => rnFintechExample);
