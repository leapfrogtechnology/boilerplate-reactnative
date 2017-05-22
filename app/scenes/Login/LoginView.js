import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import React, {PropTypes} from 'react';
import TransparentButton from '../../components/TransparentButton';

import styles from './styles';

/**
 * Render login form.
 * @param {object} props
 * @constructor
 */
const LoginView = (props) => (
    <ScrollView contentProps={{bounces: true, keyboardShouldPersistTaps: true}}>
        <View>
          <View>
            <TextInput
              value={props.data.username}
              placeholder="Username"
              onChangeText={(value) => props.handleOnChange('login.username', value)}
            />
          </View>
          <View>
              <TextInput
                value={props.data.password}
                placeholder="Password"
                onChangeText={(value) => props.handleOnChange('login.password', value)}
              />
          </View>
        </View>

        <View>
          <TransparentButton
            label='Login'
            onPress={props.onPress}
          />
        </View>
    </ScrollView>
);

LoginView.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func.isRequired
};

export default LoginView;
