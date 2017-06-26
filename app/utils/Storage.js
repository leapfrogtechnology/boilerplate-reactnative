import {AsyncStorage} from 'react-native';

const deviceStorage = {
  /**
   * Save a key value pair to AsyncStorage.
   * @param  {String} key The key of key/value pairs
   * @param  {Object} value The value to save
   * @return {Promise}
   */
  save(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * Get value for a key from AsyncStorage.
   * @param {String} key A key of keys
   * @return {Promise}
   */
  get(key) {
    return AsyncStorage.getItem(key);
  },

  /**
   * Delete the value for a given key in AsyncStorage.
   * @param  {String} key The key
   * @return {Promise}
   */
  remove(key) {
    return AsyncStorage.removeItem(key);
  }
};

export default deviceStorage;