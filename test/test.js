const chai = require('chai');

const {
  expect,
} = chai;

const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

require('dotenv').config();
const sf = require('../built/src/index.js');


describe('StockFinder Return Stocks off of stable release.', () => {
  it('Should return TSLA stock', () => {
    const res = sf.getStock({ ticker: 'TSLA', apiKey: process.env.API_KEY });
    return expect(res).to.eventually.to.be.a('object')
  });

  it('Should return multiple stocks', () => {
    const res = sf.getStocks({ tickers: ['TSLA', 'AAPL'], apiKey: process.env.API_KEY });
    return expect(res).to.eventually.to.be.a('object')
  });
});
