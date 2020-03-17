import * as rp from 'request-promise-native';

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

interface ErrInterface {
  statusCode: number; name: string; message: string; error: object;
}

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
        rp.get(url, {
          resolveWithFullResponse: true,
          simple: true,
        }).then((res: { body: string }) => {
          if (!res) {
            reject(new Error(
              'Something went wrong here.',
            ));
          } else {
            resolve(JSON.parse(res.body));
          }
        }).catch((err: ErrInterface) => {
          this.assignError(err);
          reject(this.error);
        });
      } else {
        reject(Error('Please provide an API key for IEX Cloud'));
      }
    });
  }

  public getStocks(): Promise<StockFinder> {
    return new Promise((resolve, reject) => {
      if (typeof this.tickers === 'object') {
        const stocks = ats(this.tickers);
        const url = `https://cloud.iexapis.com/${this.version}/tops?token=${this.apiKey}&symbols=${stocks}`;
        if (this.apiKey !== undefined) {
          rp.get(url, {
            resolveWithFullResponse: true,
            simple: true,
          }).then((res: { body: string }) => {
            if (!res) {
              reject(new Error(
                'Something went wrong here.',
              ));
            } else {
              resolve(JSON.parse(res.body));
            }
          }).catch((err: ErrInterface) => {
            this.assignError(err);
            reject(this.error);
          });
        }
      } else {
        reject(Error('Please provide an API key for IEX Cloud'));
      }
    });
  }


  assignError(err: ErrInterface): void {
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
