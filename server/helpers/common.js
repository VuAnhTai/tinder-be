export const Common = {
  /**
   * Parse array to string
   * @param {array} array
   * @returns {string} token
   */
  parseArrayToString(array) {
    let string = '';
    array.forEach(element => {
      string += string === '' ? element.msg : '<br>' + element.msg;
    });
    return string;
  },
  /**
   * Convert any type string to uppercase the first letter "capitalize "
   * @param {string} string
   * @returns {string} string
   */
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * Set key and value from object to another object
   * @param {object} object
   * @param {object} response
   * @param {array} array
   * @returns {object} string
   */
  setKeyForObject(object, response, array) {
    if (array.length > 0) {
      array.forEach(element => {
        response[element] = object[element];
      });
    }
    return response;
  },

  formatErrMgs(arrErrField) {
    let arrErr = [];
    for (let key in arrErrField) {
      let row = arrErrField[key];
      arrErr.push(row.message);
    }
    return arrErr.join('<br>');
  },

};
