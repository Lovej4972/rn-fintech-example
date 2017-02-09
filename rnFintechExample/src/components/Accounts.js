import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import AccountForm from './AccountForm';
import { List, ListItem } from 'react-native-elements'
import { setSelectedAccountAction } from '../actions';


class Accounts extends Component {
  constructor(props) {
    super(props);
    this.displayAccounts = this.displayAccounts.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
  }
  goToAccount(index) {
    this.props.setSelectedAccount(index);
    this.props.navigator.push({ id: 'account' });
  }
  displayAccounts() {
    //do something
    console.log(this.props.accounts);
    return (<List>
      {
        this.props.accounts.map((account, i) => (
          <ListItem
            key={i}
            onPress={() => this.goToAccount(i)}
            subtitle={<Text>Balance: ${account.balance} {(account.holdings && `Holdings: ${account.holdings}`)}</Text>}
            title={<Text>{account.name}</Text>}
            leftIcon={{name: account.icon}}
          />
        ))
      }
    </List>)
  }
  render() {
    const { accounts } = this.props;
    const accountsAvailable = accounts.length;
    return (
      <View style={styles.container}>
        { accountsAvailable ? this.displayAccounts() : <Text>No Accounts Available</Text> }
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
  accounts: state.accounts[state.user.email] || [],
});
const mapDispatchToProps = dispatch => ({
  setSelectedAccount: selectedAccount => dispatch(setSelectedAccountAction(selectedAccount)),
});
export default connect(mapPropsToState, mapDispatchToProps)(Accounts);
