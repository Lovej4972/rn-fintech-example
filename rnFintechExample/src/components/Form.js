import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

export default class Form extends Component {
  showHoldingsInput() {
    return (
      <View>
        <FormLabel>Holdings</FormLabel>
        <FormInput keyboardType="numeric" defaultValue={this.props.formData && this.props.formData.holdings || ''} onChangeText={(txt) => this.props.setFormData({ holdings: parseFloat(txt)})} />
      </View>)
  }
  render() {
    const buttons = ['Cash Account', 'Debt Account', 'Investment Account'];
    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput defaultValue={this.props.formData && this.props.formData.name || ''} onChangeText={(txt) => this.props.setFormData({ name: txt})}/>
        <FormLabel>Balance</FormLabel>
        <FormInput
          keyboardType="numeric"
          defaultValue={this.props.formData && this.props.formData.balance || ''}
          onChangeText={(txt) => this.props.setFormData({ balance: parseInt(txt)})}
        />
      {(this.props.type === 'INVESTMENT') && this.showHoldingsInput()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
