import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Button } from 'react-native-elements';

import Header from './Header';
import Form from './Form';
import { removeAccountAction, updateAccountAction } from '../actions';
import {
  updateAccount as ajaxUpdateAccount,
  removeAccount as ajaxRemoveAccount,
} from '../ajax';

/**
 * Account - dispaly account details and allow the user to edit or remove an account
 * @extends Component
 */
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRemoveAccount = this.handleRemoveAccount.bind(this);
    this.handleUpdateAccount = this.handleUpdateAccount.bind(this);
  }

  /**
   * removeAccount - remove the account in context from the user
   * and return to the account summary page
   * @returns {undefined}
   */
  handleRemoveAccount() {
    const { selectedAccount, email, navigator, removeAccount, account } = this.props;
    removeAccount(selectedAccount, email);
    // perform server add request (ilustration purposes)
    ajaxRemoveAccount(email, account).then((res) =>{
      Promise.resolve(res.text())
        .then((msg) => alert(msg))
        .done(() =>navigator.replace({ id: 'user'}));
    });
  }
  handleUpdateAccount() {
    const { selectedAccount, email, navigator, account, updateAccount } = this.props;
    updateAccount(selectedAccount, email, this.state);
    // perform server add request (ilustration purposes)
    ajaxUpdateAccount(email, account).then((res) =>{
      Promise.resolve(res.text())
        .then((msg) => alert(msg))
        .done(() =>navigator.pop());
    });
  }
  render() {
    const { navigator, account } = this.props;
    if (account && account.type) {
      return (
        <View style={styles.container}>
          <Header title="Account Edit/Remove page" navigator={navigator}/>
          <Form
            setFormData={formData => this.setState(formData)}
            formData={account}
            type={account.type}
          />
          <Button
            buttonStyle={styles.button}
            title="Update"
            backgroundColor="green"
            onPress={this.handleUpdateAccount}
          />
          <Button
            buttonStyle={styles.button}
            title="Remove Account"
            backgroundColor="red"
            onPress={this.handleRemoveAccount}
          />
        </View>
      );
    }
    return <ActivityIndicator
        animating={true}
        style={[styles.centering, {height: 80}]}
        size="large"
      />;
  }
}
Account.propTypes = {
  account: PropTypes.object,
  selectedAccount: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: 200,
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
