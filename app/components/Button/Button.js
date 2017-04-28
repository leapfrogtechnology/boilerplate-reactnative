import {
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';
import React, {PropTypes} from 'react';

import styles from './styles';

const Button = ({label, onPress, disabled = false}) => (
  <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
    <View style={styles.container}>
      <Text> {label} </Text>
    </View>
  </TouchableNativeFeedback>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
