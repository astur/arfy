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

console.log(arfy('test1', 'test2'));               // ['test1', 'test2']
console.log(arfy(['test1'], ['test2']));           // ['test1', 'test2']
console.log(arfy('test1', ['test2', 'test3']));    // ['test1', 'test2', 'test3']
console.log(arfy(['test1', 'test2'], [], null));   // ['test1', 'test2']
console.log(arfy(['test', ['test']]));             // ['test', ['test']]

console.log(arfy(123));            // [123]
console.log(arfy({a: 1, b: 2}));   // [{a: 1, b: 2}]
console.log(arfy(true));           // [true]
console.log(arfy(false));          // [false]
```

## License

MIT

[npm-url]: https://npmjs.org/package/arfy
[npm-image]: https://badge.fury.io/js/arfy.svg
[travis-url]: https://travis-ci.org/astur/arfy
[travis-image]: https://travis-ci.org/astur/arfy.svg?branch=master