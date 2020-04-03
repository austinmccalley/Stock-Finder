<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] [![MIT
License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Faustinmccalley%2FStock-Finder.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Faustinmccalley%2FStock-Finder?ref=badge_shield)


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/austinmccalley/Stock-Finder/">
    <img src="images/logo.png" alt="Logo" width="180" height="180">
  </a>

  <h3 align="center">Stock Finder</h3>

  <p align="center">
     A fast way to query IEX Cloud to find recent stock data.
    <br />
    <a href="https://github.com/austinmccalley/Stock-Finder"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/austinmccalley/Stock-Finder">View Demo</a>
    ·
    <a href="https://github.com/austinmccalley/Stock-Finder/issues">Stock-Finder Bug</a>
    ·
    <a href="https://github.com/austinmccalley/Stock-Finder/issues">Request Feature</a>
  </p>
</p>



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

I created this project to easily query the IEX Cloud database of stock
information for my own use. I originally started by looking for packages that
already offered this and there was none that was updated. I then created this
package to allow for a much more streamlined approach to do this.

### Built With

* [NPM](https://nodejs.org)
* [request-promise-native](https://github.com/request/request-promise-native)
* [TypeScript](https://www.typescriptlang.org/)

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

3. Build JS File

```sh
tsc
```

<!-- USAGE EXAMPLES -->
## Usage

Here is a code sample of how to do a simple request for $TSLA stock information
using the package with the ``getStock()`` function.

```javascript
const stockFinder = require('stockfinder');

/*
  Declare the Stock Finder with
  the parameters you want
*/
const sf = new stockfinder('stable', 'TSLA', apiKey, false);

/*
  Call the get stock function and then wait
  for the promise to return
*/
sf.getStock().then(res => {
  console.log(res)
});
```

If you want to get multiple stocks you will use the ``getStocks()`` function.

```javascript
const stockFinder = require('stockfinder');

/*
  Declare the Stock Finder with
  the parameters you want
*/
const sf = new stockfinder('stable', ['TSLA','AAPL'], apiKey, false);

/*
  Call the get stocks function and then wait
  for the promise to return
*/
sf.getStocks().then(res => {
  console.log(res)
});
```

### *Note*

Sometimes IEX Cloud has issues with normal requests, you can switch to using a
CURL request instead by following the example.

```javascript
const stockFinder = require('stockfinder');

/*
  Declare the Stock Finder with
  the parameters you want
*/
const sf = new stockfinder('stable', 'TSLA', apiKey, true);

/*
  Call the get stock function and then wait
  for the promise to return
*/
sf.getStock().then(res => {
  console.log(res)
});
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/austinmccalley/Stock-Finder/issues) for
a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to
be learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

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

Project Link:
[https://github.com/austinmccalley/Stock-Finder](https://github.com/austinmccalley/Stock-Finder)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]:
https://img.shields.io/github/contributors/austinmccalley/Stock-Finder.svg?style=flat-square
[contributors-url]:
https://github.com/austinmccalley/Stock-Finder/graphs/contributors
[forks-shield]:
https://img.shields.io/github/forks/austinmccalley/Stock-Finder.svg?style=flat-square
[forks-url]: https://github.com/austinmccalley/Stock-Finder/network/members
[stars-shield]:
https://img.shields.io/github/stars/austinmccalley/Stock-Finder.svg?style=flat-square
[stars-url]: https://github.com/austinmccalley/Stock-Finder/stargazers
[issues-shield]:
https://img.shields.io/github/issues/austinmccalley/Stock-Finder.svg?style=flat-square
[issues-url]: https://github.com/austinmccalley/Stock-Finder/issues
[license-shield]:
https://img.shields.io/github/license/austinmccalley/Stock-Finder.svg?style=flat-square
[license-url]:
https://github.com/austinmccalley/Stock-Finder/blob/master/LICENSE
[linkedin-shield]:
https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/austin-mccalley 
[product-screenshot]:images/screenshot.png
