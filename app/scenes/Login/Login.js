import {
  Text,
  View,
  ToastAndroid
} from 'react-native';
import LoginView from './LoginView';
import message from '../../lang/en';
import uri from '../../config/uri';
import React, {Component} from 'react';
import {httpUtils, validationUtils} from '../../utils';

import styles from './styles';

class Login extends Component {

    constructor() {
        super();
        this.state = {
          login: {
            username: '',
            password:''
          }
         };
    }

  render() {
    return (
      <View style={styles.container}>
        <LoginView
          data={this.state.login}
          onPress={this._loginUser}
          handleOnChange={this._handleOnChange}
        />
      </View>
    );
  }

  /**
   * Set user input in state.
   * @param {string} path
   * @param {object} value
   * @private
  */
  _handleOnChange = (path, value) => {
    let [object, key] = path.split('.');
    this.state[object][key] = value;

    this.setState({[object]: this.state[object]});
  };

  /**
  * Login user and on success redirect to dashboard.
  * @private
  */
  _loginUser = () => {
    if (!validationUtils.isEmailValid(this.state.login.username)) {
      ToastAndroid.show(message.WRONG_EMAIL_FORMAT, ToastAndroid.SHORT);
      return;
    }

    httpUtils.post(uri.LOGIN, this.state.login).then((response) => {
      ToastAndroid.show(message.WRONG_EMAIL_FORMAT, ToastAndroid.SHORT);
    }, () => {
      ToastAndroid.show(message.USER_NOT_FOUND, ToastAndroid.SHORT);
    });
    }
}

export default Login;
