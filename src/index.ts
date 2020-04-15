// import * as rp from 'request-promise-native';
import fetch from 'node-fetch';

// eslint-disable-next-line func-names
const ats = function (arr: string[]): string {
  let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== 0) {
      str += `,${arr[i]}`;
    } else {
      str += arr[i];
    }
  }
  return str;
};

const sf = class StockFinder {
  version: string;

  tickers: string[];

  apiKey: string;

  curl: boolean;

  error: object;

  constructor(version: string, tickers: string[], apiKey: string, curl: boolean) {
    this.version = version;
    this.tickers = tickers;
    this.apiKey = apiKey;
    this.curl = curl;
    this.error = {};
  }

  public getStock(): Promise<StockFinder> {
    return new Promise((resolve, reject) => {
      const url = `https://cloud.iexapis.com/${this.version}/tops?token=${this.apiKey}&symbols=${this.tickers}`;
      if (this.apiKey !== undefined) {
        fetch(url).then((res) => res.json()).then((body) => {
          resolve(body);
        }).catch((err) => reject(err));
      } else {
        reject(new Error('API key was not defined'));
      }
    });
  }


  public getStocks(): Promise<StockFinder> {
    return new Promise((resolve, reject) => {
      if (typeof this.tickers === 'object') {
        const stocks = ats(this.tickers);
        const url = `https://cloud.iexapis.com/${this.version}/tops?token=${this.apiKey}&symbols=${stocks}`;
        if (this.apiKey !== undefined) {
          fetch(url).then((res) => res.json()).then((body) => {
            resolve(body);
          }).catch((err) => reject(err));
        } else {
          reject(new Error('API key was not defined'));
        }
      }
    });
  }

  public getCompany(): Promise<StockFinder> {
    return new Promise((resolve, reject) => {
      const url = `https://cloud.iexapis.com/${this.version}/stock/${this.tickers}/company?token=${this.apiKey}`;
      if (this.apiKey !== undefined) {
        fetch(url).then((res) => res.json()).then((body) => {
          resolve(body);
        }).catch((err) => reject(err));
      } else {
        reject(new Error('API key was not defined'));
      }
    });
  }
};

module.exports = sf;
