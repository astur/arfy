# arfy

Ensures that something is array

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i arfy
```

## Usage

```js
const arfy = require('arfy');

console.log(arfy('test'));               // ['test']
console.log(arfy(['test']));             // ['test']
console.log(arfy(['test1', 'test2']));   // ['test1', 'test2']
console.log(arfy());                     // []
console.log(arfy(null));                 // []
```

## License

MIT

[npm-url]: https://npmjs.org/package/arfy
[npm-image]: https://badge.fury.io/js/arfy.svg
[travis-url]: https://travis-ci.org/astur/arfy
[travis-image]: https://travis-ci.org/astur/arfy.svg?branch=master