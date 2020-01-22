const chai = require('chai');

const { expect } = chai;

const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

require('dotenv').config();

const stockFinder = require('../index.js');


it('Should return TSLA stock', () => {
  const sf = new stockFinder('stable', 'TSLA', process.env.API_KEY, false);
  const res = sf.getStock();
  return expect(res).to.eventually.have.length(1);
  done();
});

it('Should return multiple stocks', () => {
  const sf = new stockFinder('stable', ['TSLA', 'AAPL'], process.env.API_KEY, false);
  const res = sf.getStock();
  return expect(res).to.eventually.have.length(2);
  done();
});
