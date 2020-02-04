<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<html>
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/austinmccalley/Stock-Finder/">
    <img src="images/logo.png" alt="Logo" width="180" height="180">
  </a>

  <h1 align="center">Stock Finder</h1>

  <p align="center">
  
 <br />
     A fast way to query IEX Cloud to find recent stock data.
    <br />
    <a href="https://github.com/austinmccalley/Stock-Finder"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/austinmccalley/Stock-Finder/demo">View Demo</a>
    ·
    <a href="https://github.com/austinmccalley/Stock-Finder/issues">Stock-Finder Bug</a>
    ·
    <a href="https://github.com/austinmccalley/Stock-Finder/issues">Request Feature</a>
  </p>
</p>
</html>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

I created this project to easily query the IEX Cloud database of stock information for my own use. I originally started by looking for packages that already offered this and there was none that was updated. I then created this package to allow for a much more streamlined approach to do this.

### Built With

* [NPM](https://nodejs.org)
* [request-promise-native](https://github.com/request/request-promise-native)

<!-- GETTING STARTED -->
## Getting Started

To get started with using this package follow these steps.

### Prerequisites

You need to have the latest version of NPM for this project to work.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the Stock-Finder

```sh
git clone https://github.com/austinmccalley/Stock-Finder.git
```

2. Install NPM packages

```sh
npm install
```


<!-- USAGE EXAMPLES -->
## Usage

Here is a code sample of how to do a simple request for $TSLA stock information using the package.

```javascript
const StockFinder = require('stockfinder');

/* Initialize the Stock Finder Object */
/* StockFinder(branch, Ticker, API_KEY, curl(OPTIONAL)) */
const sf = new StockFinder('stable', 'TSLA', process.env.API_KEY);

sf.getStock((stock) => {
  console.log(stock);
}).catch((err) => {
  console.error(err);
})
```

Here is a code sample of how to do a simple request for $TSLA and $AAPL stock information using the package.

```javascript
const StockFinder = require('stockfinder');

/* Initialize the Stock Finder Object */
/* StockFinder(branch, [Tickers], API_KEY, curl(OPTIONAL)) */
const sf = new StockFinder('stable',['TSLA', 'AAPL'], process.env.API_KEY);

sf.getStock((stock) => {
  console.log(stock);
}).catch((err) => {
  console.error(err);
})
```

### *Note*

Sometimes IEX Cloud has issues with normal requests, you can switch to using a CURL request instead by following the example.

```javascript
const StockFinder = require('stockfinder');

/* Initialize the Stock Finder Object */
/* StockFinder(branch, Ticker, API_KEY, curl(OPTIONAL)) */
const sf = new StockFinder('stable', 'TSLA', process.env.API_KEY), true;

sf.getStock((stock) => {
  console.log(stock);
}).catch((err) => {
  console.error(err);
})
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/austinmccalley/Stock-Finder/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Austin McCalley - austin@austinmccalley.com

Project Link: [https://github.com/austinmccalley/Stock-Finder](https://github.com/austinmccalley/Stock-Finder)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/austinmccalley/Stock-Finder.svg?style=flat-square
[contributors-url]: https://github.com/austinmccalley/Stock-Finder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/austinmccalley/Stock-Finder.svg?style=flat-square
[forks-url]: https://github.com/austinmccalley/Stock-Finder/network/members
[stars-shield]: https://img.shields.io/github/stars/austinmccalley/Stock-Finder.svg?style=flat-square
[stars-url]: https://github.com/austinmccalley/Stock-Finder/stargazers
[issues-shield]: https://img.shields.io/github/issues/austinmccalley/Stock-Finder.svg?style=flat-square
[issues-url]: https://github.com/austinmccalley/Stock-Finder/issues
[license-shield]: https://img.shields.io/github/license/austinmccalley/Stock-Finder.svg?style=flat-square
[license-url]: https://github.com/austinmccalley/Stock-Finder/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/austin-mccalley
[product-screenshot]: images/screenshot.png
