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
import Accounts from './components/Accounts';

class App extends Component {
  componentDidMount() {
    this.props.setUser(new User("Yaniv Shnaider", "shyaniv7@gmail.com", "573-823-3103"));
  }
  render() {
    const { user, accounts } = this.props;
    return (
      <View style={styles.container}>
        <Header title="Welcome" />
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
        <Accounts user={user.email}/>
        <Button backgroundColor="tomato" title="Add Account" onPress={() => this.props.navigator.push({ id: 'account-form' })}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const mapPropsToState = state => ({
  user: state.user,
  accounts: state.accounts,
});
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUserAction(user)),
});
export default connect(mapPropsToState, mapDispatchToProps)(App);
