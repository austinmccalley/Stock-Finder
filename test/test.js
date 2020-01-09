const chai = require('chai');

const { expect } = chai;

const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

require('dotenv').config();

const stockFinder = require('../index.js');


it('Should return TSLA stock', () => {
  const res = stockFinder('TSLA', process.env.API_KEY);
  return expect(res).to.eventually.have.length(1);
  done();
});
