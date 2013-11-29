var map = process.env.MAP_COV ? require('../lib-cov/map-series') : require('../'),
    expect = require('chai').expect


suite('map')

test('array', function (done) {
  var call_order = []

  map([1, 3, 2], function (x, callback) {
    setTimeout(function(){
      call_order.push(x)
      callback(null, x*2)
    }, x*25)
  }, function (err, results){
    expect(!err)
    expect(call_order).to.eql([1, 3, 2])
    expect(results).to.eql([2, 6, 4])
    done()
  })
})

test('error', function (done) {
  var call_order = []

  map([1, 2, 3], function (x, callback) {
    callback('error')
  }, function (err){
    expect(err).to.eql('error')
    done()
  })
})