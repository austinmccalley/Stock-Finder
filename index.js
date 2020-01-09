const rp = require('request-promise-native');

/* NOTE:
 * If it is not working you can use the curl
 * functionality to run a curl command instead of a request http get
 */

// eslint-disable-next-line func-names
module.exports = function (symbol, apiKey, curl = false) {
  /* Using Promises */
  return new Promise(((fulfill, reject) => {
    if (apiKey === undefined || apiKey == null) {
      reject(new Error({
        error: 'Please provide a proper IEX Cloud api key.',
      }));
    } else if (curl) {
      /* This is where the curl is happening */
      rp(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`)
        .then((res) => {
          if (!res) {
            /* If there is no response then something went wrong */
            reject(new Error({
              error: 'Something went wrong.',
            }));
          }
          fulfill(JSON.parse(res));
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      rp(`https://cloud.iexapis.com/stable/tops?token=${apiKey}&symbols=${symbol}`)
        .then((res) => {
          if (!res) {
            /* If there is no response then something went wrong */
            reject(new Error({
              error: 'Something went wrong.',
            }));
          }
          fulfill(JSON.parse(res));
        })
        .catch((err) => {
          reject(err);
        });
    }
  }));
};
