import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import Header from './Header';
import Form from './Form';
import { removeAccountAction } from '../actions';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeAccount = this.removeAccount.bind(this);
  }
  removeAccount() {
    this.props.removeAccount(this.props.selectedAccount, this.props.email);
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Account Edit/Remove page</Text>
        <Form
          setFormData={this.setState.bind(this)}
          formData={this.props.account}
          type="DEBT"
        />
        <Button title="Remove Account" backgroundColor="red" onPress={this.removeAccount}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const mapPropsToState = (state) => ({
  account: state.accounts[state.user.email][state.selected.selectedAccount],
  selectedAccount: state.selected.selectedAccount,
  email: state.user.email,
});
const mapDispatchToProps = dispatch => ({
  removeAccount: (selectedAccount, email) => dispatch(removeAccountAction(selectedAccount, email)),
});
export default connect(mapPropsToState, mapDispatchToProps)(Account);
