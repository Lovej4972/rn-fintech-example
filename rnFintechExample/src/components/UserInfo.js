import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
/* Dispaly the current user info */
const UserInfo = ({ user }) => {
  if (Object.keys(user).length) {
    return (
      <View>
        <Text>Name: {user.getName()}</Text>
        <Text>Email: {user.getEmail()}</Text>
        <Text>Phone: {user.getPhone()}</Text>
      </View>
    )
  }
  return null;
};

const mapPropsToState = ({ user }) => ({ user });
export default connect(mapPropsToState, null)(UserInfo);
