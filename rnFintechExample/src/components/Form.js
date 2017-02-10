import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

/**
* Form - Form component for adding and updateing accounts
* @extends Component
*/
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holdingsCount: 1,
    };
    this.addHoldingsInput = this.addHoldingsInput.bind(this);
    this.showHoldingsInputs = this.showHoldingsInputs.bind(this);
  }
  /**
   * showHoldingsInputs - display all holding inputs based on holdingCount state
   * @returns {ReacNative.Element[]} list of form inputs
   */
  showHoldingsInputs() {
    let inputs = [];
    for(let i = 0; i<this.state.holdingsCount; i++) {
      inputs.push(<View key={i}>
        <FormLabel>Holding Value {i + 1}</FormLabel>
        <FormInput keyboardType="numeric" defaultValue={(this.props.formData && this.props.formData.holdings || '').toString()} onChangeText={(txt) => this.props.setFormData({ holdings: parseInt(txt)})} />
      </View>)
    }
    return inputs;
  }

  /**
   * addHoldingsInput - increments the number of holdings inputs
   * @returns {undefined}
   */
  addHoldingsInput() {
    this.setState({ holdingsCount: this.state.holdingsCount + 1 });
  }
  render() {
    const buttons = ['Cash Account', 'Debt Account', 'Investment Account'];
    console.info('form: ', this.props)
    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput defaultValue={this.props.formData && this.props.formData.name || ''} onChangeText={(txt) => this.props.setFormData({ name: txt})}/>
        <FormLabel>Balance</FormLabel>
        <FormInput
          keyboardType="numeric"
          defaultValue={(this.props.formData && this.props.formData.balance || '').toString()}
          onChangeText={(txt) => this.props.setFormData({ balance: parseInt(txt)})}
        />
      {(this.props.type === 'INVESTMENT') && this.showHoldingsInputs()}
      {(this.props.type === 'INVESTMENT') && <Button textStyle={styles.buttonTxt} buttonStyle={styles.button} title="Add Holding" onPress={() => this.addHoldingsInput(this.state.holdingsCount + 1)} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderColor: "tomato",
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 5,
  },
  buttonTxt: {
    color: "tomato",
  },
});
