import {
  Text,
  View,
  Alert
} from 'react-native';
import LoginView from './LoginView';
import message from '../../lang/en';
import uri from '../../config/uri';
import React, {Component} from 'react';
import {Actions, ActionConst} from 'react-native-router-flux';
import {httpUtils, validationUtils, authUtils} from '../../utils';
import ActivityIndicator from '../../components/ActivityIndicator';

import styles from './styles';

class Login extends Component {

    constructor() {
        super();
        this.state = {
          login: {
            username: '',
            password:''
          },
          eventFeedback: {
            isLoading: false
          }
         };
    }

  render() {
    if (this.state.eventFeedback.isLoading) {
      return <ActivityIndicator isLoading={this.state.eventFeedback.isLoading}/>;
    }

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
      Alert.alert(message.WRONG_EMAIL_FORMAT)
      return;
    }
    this.state.eventFeedback.isLoading = true;
    this.setState({eventFeedback: this.state.eventFeedback});

    httpUtils.post(uri.LOGIN, {}).then((response) => {
      this.state.eventFeedback.isLoading = false;
      this.setState({eventFeedback: this.state.eventFeedback});
      authUtils.login(response);     
    }, (err) => {
      Alert.alert(err);
      this.state.eventFeedback.isLoading = false;
      this.setState({eventFeedback: this.state.eventFeedback});      
    });
    }
}

export default Login;
