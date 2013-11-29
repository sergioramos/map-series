# map-series

[![NPM version](https://badge.fury.io/js/map-series.png)](http://badge.fury.io/js/map-series)
[![Build Status](https://secure.travis-ci.org/ramitos/map-series.png)](http://travis-ci.org/ramitos/map-series)
[![Dependency Status](https://gemnasium.com/ramitos/map-series.png)](https://gemnasium.com/ramitos/map-series)
[![Coverage Status](https://coveralls.io/repos/ramitos/map-series/badge.png?branch=master)](https://coveralls.io/r/ramitos/map-series?branch=master)
[![Code Climate](https://codeclimate.com/github/ramitos/map-series.png)](https://codeclimate.com/github/ramitos/map-series)

## install

```bash
npm install [--save/--save-dev] map-series
```

```bash
component install ramitos/map-series
```

## api

```js
var map = require('map-series')

map([1, 3, 2], function (x, callback) {
  setTimeout(function(){
    callback(null, x*2)
  }, x*25)
}, function (err, results){
  if(err) throw err
  console.log(results) //=> [2, 6, 4]
})
```

## license