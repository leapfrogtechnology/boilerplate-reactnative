import React, {PropTypes} from 'react';
import {ActivityIndicator} from 'react-native';

import styles from './styles';
import {colors} from '../../config/styles';

const LoadingSpinner = ({isLoading}) => {
  return <ActivityIndicator
    size={'large'}
    color={colors.primary}
    animating={isLoading}
    style={styles.activityIndicator}
  />;
};

LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingSpinner;
