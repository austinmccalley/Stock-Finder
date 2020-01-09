# Stock Finder
[![Known Vulnerabilities](https://snyk.io/test/github/austinmccalley/Stock-Finder/badge.svg?targetFile=package.json)](https://snyk.io/test/github/austinmccalley/Stock-Finder?targetFile=package.json)
![NPM Version](https://img.shields.io/npm/v/stockfinder.svg)
![GitHub Issues](https://img.shields.io/github/issues/austinmccalley/Stock-Finder.svg)


Query IEX Cloud using an API key to get stock prices

## Installation


```bash
npm install stockfinder --save
```

## Usage

```javascript
var stockFinder = require('stockfinder');

        stockFinder(ticker, apiKey).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
```

### Note
Sometimes IEX Cloud has issues with normal requests, you can switch to using a CURL request instead by following the example.

```javascript
const stockFinder = require('stockfinder');

    stockFinder(ticker, apiKey, curl=true).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err)
    });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/Mr-Que/Stock-Finder/blob/master/license)
