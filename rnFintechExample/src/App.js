import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';

import { setUserAction } from './actions';
import Header from './components/Header';
import User from './dataTypes/User';
import UserInfo from './components/UserInfo';
import Accounts from './components/Accounts';

class App extends Component {
  componentDidMount() {
    // set default user for demo purposes
    this.props.setUser(new User("John Smith", "john.smith@gmail.com", "618-111-2222"));
  }
  render() {
    const { user, accounts, navigator } = this.props;
    return (
      <View style={styles.container}>
        <Header title="FinTech Example App" navigator={navigator} showBackButton={false}/>
        <UserInfo />
        <Accounts navigator={navigator}/>
        <Button buttonStyle={styles.button} backgroundColor="tomato" title="Add Account" onPress={() => navigator.push({ id: 'account-form' })}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginLeft: 0,
    marginRight: 0,
  }
});
const mapPropsToState = ({ accounts }) => ({ accounts });
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUserAction(user)),
});
export default connect(mapPropsToState, mapDispatchToProps)(App);
