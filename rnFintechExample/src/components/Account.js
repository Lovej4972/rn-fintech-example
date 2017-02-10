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
import { removeAccountAction, updateAccountAction } from '../actions';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeAccount = this.removeAccount.bind(this);
    this.updateAccount = this.updateAccount.bind(this);
  }

  /**
   * removeAccount - remove the account in context from the user
   * and return to the account summary page
   * @returns {undefined}
   */
  removeAccount() {
    const {selectedAccount ,email, navigator, removeAccount} = this.props;
    removeAccount(selectedAccount, email);
    navigator.pop();
  }
  updateAccount() {
    const {selectedAccount ,email, navigator} = this.props;
    this.props.updateAccount(selectedAccount, email, this.state);
    navigator.pop();
  }
  render() {
    const { navigator, account } = this.props;
    return (
      <View style={styles.container}>
        <Header navigator={navigator}/>
        <Text>Account Edit/Remove page</Text>
        <Form
          setFormData={formData => this.setState(formData)}
          formData={account}
          type={account.type}
        />
      <Button buttonStyle={styles.button} title="Update" backgroundColor="green" onPress={this.updateAccount} />
        <Button buttonStyle={styles.button} title="Remove Account" backgroundColor="red" onPress={this.removeAccount}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginRight: 0,
    marginLeft: 0,
    marginTop: 5,
  },
});
const mapPropsToState = (state) => ({
  account: state.accounts[state.user.email][state.selected.selectedAccount],
  selectedAccount: state.selected.selectedAccount,
  email: state.user.email,
});
const mapDispatchToProps = dispatch => ({
  removeAccount: (selectedAccount, email) => dispatch(removeAccountAction(selectedAccount, email)),
  updateAccount: (selectedAccount, email, account) => dispatch(updateAccountAction(selectedAccount, email, account)),
});
export default connect(mapPropsToState, mapDispatchToProps)(Account);
