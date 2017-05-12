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
 * Validate string with alphabet spaces or numbers.
 * @param {String} string
 * @return {*|boolean}
 */
const isStringWithSpaceAndNumberValid = (string) => {
  return (/^[A-Za-z0-9\s]+$/).test(string.toString().trim());
};


export {isStringWithSpaceValid, isStringWithoutSpaceValid, isStringWithSpaceAndNumberValid};
