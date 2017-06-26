import axios from 'axios';
import uri from '../config/uri';
import {logOut} from './authUtils';
import deviceStorage from '../utils/Storage';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../common/Constants';

/**
 * Intercept response, if it is 401 then send request for new access token using refresh token.
 * If refresh token is also expired then redirect to login page.
 */
axios.interceptors.response.use((response) => {
  return response;
}, async(error) => {
  if (error.response && error.response.status === 401) {
    return requestNewAccessToken(uri.REFRESH_TOKEN, 'post', {
      'refreshToken': await _getRefreshToken()
    }).then((response) => {
      // Make the same request again after getting new access token
      deviceStorage.save(ACCESS_TOKEN, response.data.data.accessToken);
      deviceStorage.save(REFRESH_TOKEN, response.data.data.refreshToken);
      error.config.headers.Authorization = response.data.data.accessToken;

      return axios(error.config);
    }).catch(() => {
      logOut();
    });
  }
});

/**
 * Send GET request to server.
 * @param {String} url
 * @return {Promise.<T>|Promise<T>}
 */
async function get(url) {
  return axios.get('http://jsonplaceholder.typicode.com/posts/2', {
    headers: {
      'Authorization': '',
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.data;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Send array of request promises.
 * @param {Array} array of request promises
 * @return {Promise.<T>|Promise<T>}
 */
async function all(requests) {
  return axios.all(requests).then(response => {
    return response;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Send POST request to server
 * @param {String} url
 * @param {Object} body
 * @return {Promise.<T>|Promise<T>}
 */
async function post(url, body) {
  return axios.post(url, body, {
    headers: {
      'Authorization': '',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
      response.data={
        name: 'test',
        accessToken: 'aasdnkandsjn-afasdfasdf',
        refreshToken: 'adankasdfjkaksdfhhfdsd'
      };
    return response.data;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Send PUT request to server
 * @param {String} url
 * @param {Object} body
 * @return {Promise.<T>|Promise<T>}
 */
async function put(url, id, body) {
  let putUrl = `${url}/${id}`;

  return axios.put(putUrl, body, {
    headers: {
      'Authorization': await _getAccessToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.data;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Get access token from AsyncStorage.
 * @return {Promise.<TResult>|*}
 * @private
 */
let _getAccessToken = async() => {
  return deviceStorage.get(ACCESS_TOKEN).then((data) => {
    if (data === null) {
      return '';
    }

    return JSON.parse(data);
  });
};

/**
 * Get access token from AsyncStorage.
 * @return {Promise.<TResult>|*}
 * @private
 */
let _getRefreshToken = async() => {
  return deviceStorage.get(REFRESH_TOKEN).then((data) => {
    if (data === null) {
      return '';
    }

    return JSON.parse(data);
  });
};

export {get, post, put};
