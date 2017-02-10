import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

/**
 * UserInfo - Dispaly current user information
 * @param {object} user      user data
 * @param {ReactNative.Element | null}  user information in a view or null
 *
 * @returns {type} Description
 */
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
UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapPropsToState = ({ user }) => ({ user });
export default connect(mapPropsToState, null)(UserInfo);
