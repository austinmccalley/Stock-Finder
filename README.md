# Stock Finder

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/Mr-Que/Stock-Finder/blob/master/license)