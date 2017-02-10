import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'

import AccountForm from './AccountForm';
import { setSelectedAccountAction } from '../actions';

/**
 * Accounts - Display accounts information
 * @extends Component
 */
class Accounts extends Component {
  constructor(props) {
    super(props);
    this.displayAccounts = this.displayAccounts.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
  }

  /**
   * goToAccount - save the current account index and navigate to the account page
   * @param {number} index account index
   * @returns {undefined}
   */
  goToAccount(index) {
    this.props.setSelectedAccount(index);
    this.props.navigator.push({ id: 'account' });
  }
  /**
   * displayAccounts - generate the accounts for display as a list
   * @returns {ReactNative.Element[]} list of accounts
   */
  displayAccounts() {
    return (
      <List>
      {
        this.props.accounts.map((account, i) => (
          <ListItem
            key={i}
            onPress={() => this.goToAccount(i)}
            subtitle={<Text>Balance: ${account.balance} {(account.type === 'INVESTMENT' && `Holdings: $${account.holdings}`)}</Text>}
            title={<Text>{account.name}</Text>}
            leftIcon={{ name: account.icon, color: (account.type === 'DEBT' ? 'red' : 'green') }}
          />
        ))
      }
    </List>);
  }
  noAccountsAvailable() {
    return (<View>
      <Text style={styles.text}>No Accounts Available</Text>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/ecology-and-nature/64/_Dead_Flower-256.png' }}
      />
      </View>)
  }
  render() {
    const { accounts } = this.props;
    const accountsAvailable = accounts.length;
    return (
      <View style={styles.container}>
        <Text style={styles.header} >{`Net Worth ${this.props.networth} dollars`}</Text>
        <ScrollView>
          { accountsAvailable ? this.displayAccounts() : this.noAccountsAvailable() }
        </ScrollView>
      </View>
    );
  }
}
Accounts.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
  networth: PropTypes.number.isRequired,
  navigator: PropTypes.object.isRequired,
  setSelectedAccount: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
});
const mapPropsToState = state => {
  const accounts = state.accounts[state.user.email] || [];
  // calculate the networth of all the accounts
  const networth = !accounts.length ? 0 : accounts.reduce((prev, curr) => {
    if (curr.type === 'INVESTMENT') {
      return prev + curr.balance + curr.holdings;
    }
    if (curr.type === 'DEBT') {
      return prev - curr.balance;
    }
    return prev + curr.balance;
  }, 0);
  return {
    networth,
    accounts,
  }
};
const mapDispatchToProps = dispatch => ({
  setSelectedAccount: selectedAccount => dispatch(setSelectedAccountAction(selectedAccount)),
});
export default connect(mapPropsToState, mapDispatchToProps)(Accounts);
