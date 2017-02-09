import React, { Component } from 'react';
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
    this.addAccount = this.addAccount.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  addAccount() {
    let account;
    switch(this.state.type) {
      case 'CASH':
        account = new CashAccount(this.state.name, this.state.balance);
        break;
      case 'DEBT':
        account = new DebtAccount(this.state.name, this.state.balance);
        break;
      case 'INVESTMENT':
        account = new InvestmentAccount(this.state.name, this.state.balance, this.state.holdings);
        break;
      default:
        break;
    }
    this.props.addAccount(account, this.props.email);
    this.props.navigator.pop();
  }
  showHoldingsInput() {
    return (
      <View>
        <FormLabel>Holdings</FormLabel>
        <FormInput keyboardType="numeric" onChangeText={(txt) => this.setState({ holdings: parseFloat(txt)})} />
      </View>)
  }
  updateIndex(selectedIndex) {
    const type = { 0: 'CASH', 1: 'DEBT', 2:'INVESTMENT'};
    this.setState({
      selectedIndex,
      type: type[selectedIndex],
    });
  }
  render() {
    const buttons = ['Cash Account', 'Debt Account', 'Investment Account'];
    return (
      <View style={styles.container}>
        <Header />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
        <Form
          setFormData={this.setState}
          type={this.state.type}
        />
      {(this.state.type === 'INVESTMENT') && this.showHoldingsInput()}
        <Button title="Add Account" onPress={this.addAccount}/>
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
  email: state.user.email,
});
const mapDispatchToProps = dispatch => ({
  addAccount: (account, email) => dispatch(addAccountAction(account, email)),
});
export default connect(mapPropsToState, mapDispatchToProps)(AccountForm);
