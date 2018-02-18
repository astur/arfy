const test = require('ava');
const arfy = require('.');

test('arfy', t => {
    t.deepEqual(arfy('test'), ['test']);
    t.deepEqual(arfy(['test']), ['test']);
    t.deepEqual(arfy(['test1', 'test2']), ['test1', 'test2']);
    t.deepEqual(arfy(), []);
    t.deepEqual(arfy(null), []);
});
