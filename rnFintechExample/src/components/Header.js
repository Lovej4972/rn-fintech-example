import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="tomato" />
    <Text style={styles.title}>Welcome</Text>
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
