/**
 * Validate string with alphabet and spaces only.
 * @param {String} string
 * @return {*|boolean}
 */
const isStringWithSpaceValid = (string) => {
  return (/^[A-Za-z\s]+$/).test(string.toString().trim());
};

/**
 * Validate string with alphabet but not spaces.
 * @param {String} string
 * @return {*|boolean}
 */
const isStringWithoutSpaceValid = (string) => {
  return (/^[A-Za-z]+$/).test(string.toString().trim());
};

/**
 * Validate email.
 * @param {String} string
 * @return {*|boolean}
 */
const isEmailValid = (string) => {
  return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(string.toString().trim());
};

/**
 * Validate string with alphabet spaces or numbers.
 * @param {String} string
 * @return {*|boolean}
 */
const isStringWithSpaceAndNumberValid = (string) => {
  return (/^[A-Za-z0-9\s]+$/).test(string.toString().trim());
};


export {isEmailValid, isStringWithSpaceValid, isStringWithoutSpaceValid, isStringWithSpaceAndNumberValid};
