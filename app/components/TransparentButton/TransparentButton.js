import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import React, {PropTypes} from 'react';

import styles from './styles';

/**
 * Render transparent button.
 * @param {function} onPress
 * @param {string} label
 * @param {boolean} disabled
 * @constructor
 */
const TransparentButton = ({onPress, label, disabled = false}) => (
  <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
    <View style={styles.button}>
      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  </TouchableNativeFeedback>
);

TransparentButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default TransparentButton;
