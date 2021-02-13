require('dotenv').config();
const sf = require('./built/src/index.js');

sf.getStock({ ticker: 'GME', apiKey: process.env.API_KEY }).then(res => {
  console.log(res, ' gamestop')
})

sf.getStocks({ tickers: ['GME', 'AMC'], apiKey: process.env.API_KEY }).then(res => {
  console.log(res, ' gme and amc')
})