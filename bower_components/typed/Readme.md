# typedof

  better type checking

![](https://api.travis-ci.org/jwerle/typedof.png?branch=master)
![](https://ci.testling.com/jwerle/typedof.png)

## install

***node***

```js
$ npm install typedof
```

***component***

```js
$ component install jwerle/typedof
```

***bower***

```js
$ bower install typedof
```

## api

### typedof(i)

returns the type of a given input
   
```js
assert('string' === typedof('string'));
assert('boolean' === typedof(true));
assert('number' === typedof(0));
assert('date' === typedof(new Date));
assert('null' === typedof(null));
assert('undefined' === typedof(undefined));
assert('function' === typedof(function(){}));
assert('array' === typedof([]));
assert('regexp' === typedof(/foo/));
assert('object' === typedof({}));
assert('nan' === typedof(NaN));
```

## license

MIT
