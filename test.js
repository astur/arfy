const test = require('ava');
const arfy = require('.');

test('single', t => {
    t.deepEqual(arfy('test'), ['test']);
    t.deepEqual(arfy(['test']), ['test']);
    t.deepEqual(arfy(['test1', 'test2']), ['test1', 'test2']);
    t.deepEqual(arfy(), []);
    t.deepEqual(arfy(null), []);
});

test('multi', t => {
    t.deepEqual(arfy('test1', 'test2'), ['test1', 'test2']);
    t.deepEqual(arfy(['test1'], ['test2']), ['test1', 'test2']);
    t.deepEqual(arfy('test1', ['test2', 'test3']), ['test1', 'test2', 'test3']);
    t.deepEqual(arfy(['test1', 'test2'], [], null), ['test1', 'test2']);
    t.deepEqual(arfy(['test', ['test']]), ['test', ['test']]);
});

test('types', t => {
    t.deepEqual(arfy(123), [123]);
    t.deepEqual(arfy({a: 1, b: 2}), [{a: 1, b: 2}]);
    t.deepEqual(arfy(true), [true]);
    t.deepEqual(arfy(false), [false]);
});
