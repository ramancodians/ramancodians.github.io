
/**
 * module dependencies
 */

var typed = require('./')
	,	assert = require('assert')

assert('string' === typed('string'));
assert('boolean' === typed(true));
assert('number' === typed(0));
assert('date' === typed(new Date));
assert('null' === typed(null));
assert('undefined' === typed(undefined));
assert('function' === typed(function(){}));
assert('array' === typed([]));
assert('regexp' === typed(/foo/));
assert('object' === typed({}));
assert('nan' === typed(NaN));

console.log('\n   √ ok');