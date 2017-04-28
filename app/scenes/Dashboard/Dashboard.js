import {
  Text,
  View
} from 'react-native';
import React, {Component} from 'react';

import styles from './styles';

class Dashboard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to dashboard</Text>
      </View>
    );
  }
}

export default Dashboard;
