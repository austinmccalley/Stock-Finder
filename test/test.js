/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');

const {
  expect,
} = chai;

require('dotenv').config();
const StockFinder = require('../built/src/index.js');

describe('StockFinder Return Stocks off of stable release.', () => {
  it('Should return TSLA stock', () => {
    const sf = new StockFinder('stable', 'TSLA', process.env.API_KEY, false);
    sf.getStock().then((stock) => expect(stock).to.have.length(1));
  });

  it('Should return multiple stocks', () => {
    const sf = new StockFinder('stable', ['TSLA', 'AAPL'], process.env.API_KEY, false);

    sf.getStock().then((stock) => expect(stock).to.have.length(2));
  });
});

describe('StockFinder return stocks off of the beta release', () => {
  it('Should return $TSLA', () => {
    const sf = new StockFinder('beta', 'TSLA', process.env.API_KEY, false);
    sf.getStock().then((stock) => expect(stock).to.have.length(1));
  });

  it('Should return $TSLA and $AAPL', () => {
    const sf = new StockFinder('beta', ['TSLA', 'AAPL'], process.env.API_KEY, false);
    sf.getStocks().then((stock) => expect(stock).to.have.length(2));
  });
});


describe('StockFinder return company information', () => {
  it('Should return $TSLA company information', () => {
    const sf = new StockFinder('stable', 'TSLA', process.env.API_KEY, false);
    sf.getCompany().then((company) => expect(company).to.be.an('object').with.own.include({ symbol: 'TSLA' }));
  });

  it('Should return $AAPL company information off the beta branch', () => {
    const sf = new StockFinder('beta', 'AAPL', process.env.API_KEY, false);
    sf.getCompany().then((company) => expect(company).to.be.an('object').with.own.include({ symbol: 'AAPL' }));
  });
});
