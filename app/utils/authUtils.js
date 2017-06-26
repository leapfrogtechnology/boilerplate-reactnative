import {
  Alert
} from 'react-native';
import deviceStorage from './Storage';
import {Actions, ActionConst} from 'react-native-router-flux';
import {USER_KEY, ACCESS_TOKEN, REFRESH_TOKEN} from '../common/Constants';

let login = (response) => {
  let saveUserInfo = deviceStorage.save(USER_KEY, response);
  let saveAccessToken = deviceStorage.save(ACCESS_TOKEN, response.accessToken);
  let saveRefreshToken = deviceStorage.save(REFRESH_TOKEN, response.refreshToken);
  Promise.all([saveUserInfo, saveAccessToken, saveRefreshToken]).then(() => {
    Actions.dashboard({type: ActionConst.RESET});
  }).catch(() => {
    Alert.alert('Error while login');
  });
};

let logOut = () => {
  let removeUserInfo = deviceStorage.remove(USER_KEY);
  let removeAccessToken = deviceStorage.remove(ACCESS_TOKEN);
  let removeRefreshToken = deviceStorage.remove(REFRESH_TOKEN);

  Promise.all([removeUserInfo, removeAccessToken, removeRefreshToken]).then(() => {

    Actions.login({type: ActionConst.RESET});
  }).catch(() => {
    Alert.alert('Error while logging out');
  });
};

export {login, logOut};
