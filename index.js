const rp = require('request-promise-native');

const sf = class StockFinder {
  constructor(version, tickers, apiKey, curl) {
    this.version = version;
    this.tickers = tickers;
    this.apiKey = apiKey;
    this.curl = curl;
    this.error = false;
  }

  getStock() {
    return new Promise((resolve, reject) => {
      const url = `https://cloud.iexapis.com/${this.version}/tops?token=${this.apiKey}&symbols=${this.tickers}`;
      if (this.apikey === undefined) {
        rp(url, {
          resolveWithFullResponse: true,
          simple: true,
        }).then((res) => {
          if (!res) {
            reject(new Error(
              'Something went wrong here.',
            ));
          } else {
            resolve(JSON.parse(res.body));
          }
        }).catch((err) => {
          this.assignError(err);
          reject(this.error);
        });
      } else {
        reject(Error({
          error: 'Please provide an API key for IEX Cloud',
        }));
      }
    });
  }

  getStocks() {
    return new Promise((resolve, reject) => {
      if (typeof this.tickers === 'object') {
        const stocks = Array.prototype.toString(this.tickers);
        const url = `https://cloud.iexapis.com/${this.version}/tops?token=${this.apiKey}&symbols=${stocks}`;
        if (this.apiKey === undefined) {
          rp(url, {
            resolveWithFullResponse: true,
            simple: true,
          }).then((res) => {
            if (!res) {
              reject(new Error(
                'Something went wrong here.',
              ));
            } else {
              resolve(JSON.parse(res.body));
            }
          }).catch((err) => {
            this.assignError(err);
            reject(this.error);
          });
        }
      } else {
        reject(Error({
          error: 'Please provide an API key for IEX Cloud',
        }));
      }
    });
  }

  assignError(err) {
    const statusCodes = [400, 401, 402, 403, 404, 413, 429, 451, 500];

    if (statusCodes.includes(err.statusCode)) {
      this.error = {
        name: err.name,
        statusCode: err.statusCode,
        message: err.message,
        error: err.error,
      };
    } else {
      throw err;
    }
  }
};

module.exports = sf;
