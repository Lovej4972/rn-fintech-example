import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput, Button, ButtonGroup, Row } from 'react-native-elements'
import Header from './Header';
import { addAccountAction } from '../actions';
import CashAccount from '../dataTypes/accounts/CashAccount';
import DebtAccount from '../dataTypes/accounts/DebtAccount';
import InvestmentAccount from '../dataTypes/accounts/InvestmentAccount';
import Form from './Form';
import { addAccount as ajaxAddAccount } from '../ajax';

/**
 * AccountForm - Add account form will allow adding a new account
 * @extends Component
 */
class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      balance: 0,
      holdings: 0,
      type: 'DEBT',
      selectedIndex: 1,
    };
    this.handleAddAccount = this.handleAddAccount.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  /**
   * createAccount - create an account based on the type selected
   * @returns {Account} account
   */
  createAccount() {
    let account;
    const { name, balance, type } = this.state;
    switch(type) {
      case 'CASH':
        account = new CashAccount(name, balance);
        break;
      case 'DEBT':
        account = new DebtAccount(name, balance);
        break;
      case 'INVESTMENT':
        account = new InvestmentAccount(name, balance, this.state.holdings);
        break;
      default:
        break;
    }
    return account;
  }
  /**
   * handleAddAccount - create and add the account to the user
   * @returns {undefined}
   */
  handleAddAccount() {
    let account = this.createAccount();
    const { email, navigator, addAccount } = this.props;
    addAccount(account, email);
    // perform server add request (ilustration purposes)
    ajaxAddAccount(email, account).then((res) =>{
      Promise.resolve(res.text())
        .then((msg) => alert(msg))
        .done(() =>navigator.pop());
    });
  }
  /**
   * updateIndex - update the account
   * @param {number} selectedIndex - account index
   * @returns {undefined}
   */
  updateIndex(selectedIndex) {
    const type = { 0: 'CASH', 1: 'DEBT', 2:'INVESTMENT'};
    this.setState({
      selectedIndex,
      type: type[selectedIndex],
    });
  }
  render() {
    const buttons = ['Cash Account', 'Debt Account', 'Investment Account'];
    const { navigator } = this.props;
    const { type, selectedIndex } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Add Account" navigator={navigator}/>
        <ButtonGroup
          selectedBackgroundColor="tomato"
          selectedTextStyle={{ color: 'white' }}
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
        <Form
          setFormData={this.setState.bind(this)}
          type={type}
        />
      <Button
        backgroundColor="tomato"
        buttonStyle={styles.button}
        title="Add Account"
        onPress={this.handleAddAccount}
      />
      </View>
    );
  }
}
AccountForm.propTypes = {
  email: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  addAccount: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginLeft: 0,
    marginRight: 0,
  },
});
const mapPropsToState = state => ({
  email: state.user.email,
});
const mapDispatchToProps = dispatch => ({
  addAccount: (account, email) => dispatch(addAccountAction(account, email)),
});
export default connect(mapPropsToState, mapDispatchToProps)(AccountForm);
