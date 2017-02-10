import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Header = ({ title='', showBackButton = true, navigator }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor="tomato" />
    {showBackButton && <Icon name="navigate-before" onPress={() => navigator.pop()} />}
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: 'tomato',
  },
  title: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
