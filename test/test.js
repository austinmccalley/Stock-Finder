const chai = require('chai');

const {
  expect
} = chai;

const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

require('dotenv').config();

const StockFinder = require('../index.js');

describe('StockFinder Return Stocks off of stable release.', () => {
  it('Should return TSLA stock', () => {
    const sf = new StockFinder('stable', 'TSLA', process.env.API_KEY);
    const res = sf.getStock();
    return expect(res).to.eventually.have.length(1);
    done();
  });

  it('Should return multiple stocks', () => {
    const sf = new StockFinder('stable', ['TSLA', 'AAPL'], process.env.API_KEY);
    const res = sf.getStock();
    return expect(res).to.eventually.have.length(2);
    done();
  });
});

describe('StockFinder return stocks off of the beta release', () => {
  it('Should return $TSLA', () => {
    const sf = new StockFinder('beta', 'TSLA', process.env.API_KEY);
    const res = sf.getStock();
    return expect(res).to.eventually.have.length(1);
    done();
  });

  it('Should return $TSLA and $AAPL', () => {
    const sf = new StockFinder('beta', ['TSLA', 'AAPL'], process.env.API_KEY);
    const res = sf.getStock();
    return expect(res).to.eventually.have.length(2);
    done();
  });
})