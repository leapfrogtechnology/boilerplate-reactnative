import {
  Text,
  View,
  Alert
} from 'react-native';
import React, {Component} from 'react';
import TransparentButton from '../../components/TransparentButton';
import {authUtils} from '../../utils';

import styles from './styles';

class Dashboard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to dashboard</Text>
        <TransparentButton
        label="LogOut"
        onPress={this._logOut}
      />
      </View>
    );
  }

  /**
  * Login user and on success redirect to dashboard.
  * @private
  */
  _logOut = () => {
  	authUtils.logOut();  
  }
}

export default Dashboard;
