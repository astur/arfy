module.exports = (...args) => [].concat(...args.map(items => Array.isArray(items) ? items : [null, undefined].includes(items) ? [] : [items]));
