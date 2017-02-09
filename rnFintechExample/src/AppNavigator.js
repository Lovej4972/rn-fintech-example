
import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';

import App from './App';
import AccountForm from './components/AccountForm';
import Account from './components/Account';

export const globalNav = {};

export default class AppNavigator extends Component {
  componentDidMount() {
    globalNav.navigator = this._navigator;
  }

  renderScene(route, navigator) { // eslint-disable-line class-methods-use-this
    switch (route.id) {
      case 'user':
        return <App navigator={navigator} />;
      case 'account-form':
        return <AccountForm navigator={navigator} />;
      case 'account':
        return <Account navigator={navigator} />;
      default :
        return <App navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        ref={(ref) => {
          this._navigator = ref;
        }}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        initialRoute={{
          id: 'user',
        }}
        renderScene={this.renderScene}
      />
    );
  }
}
