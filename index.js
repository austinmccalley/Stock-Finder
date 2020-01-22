const rp = require('request-promise-native');

const sf = class StockFinder {
  constructor(version, tickers, apiKey, curl) {
    this.version = version;
    this.tickers = tickers;
    this.apiKey = apiKey;
    this.curl = curl;
  }

  getStock() {
    return new Promise((resolve, reject) => {
      const url = `https://cloud.iexapis.com/${this.version}/tops?token=${this.apiKey}&symbols=${this.tickers}`;
      if (this.apikey === undefined) {
        rp(url).then((res) => {
          if (!res) {
            reject(new Error(
              'Something went wrong here.',
            ));
          } else {
            resolve(JSON.parse(res));
          }
        }).catch((err) => {
          reject(err);
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
          rp(url).then((res) => {
            if (!res) {
              reject(new Error(
                'Something went wrong here.',
              ));
            } else {
              resolve(JSON.parse(res));
            }
          }).catch((err) => {
            reject(err);
          });
        }
      } else {
        reject(Error({
          error: 'Please provide an API key for IEX Cloud',
        }));
      }
    });
  }

};

module.exports = sf;
