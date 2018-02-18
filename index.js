module.exports = items =>
    Array.isArray(items) ? items : [null, undefined].includes(items) ? [] : [items];
