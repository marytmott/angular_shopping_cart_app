var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/tea_shop');
db.once('open', function() {
  console.log('connected to tea_shop');
});

mongoose.set('debug', true);

module.exports.Tea = require('./tea');
module.exports.ShoppingCart = require('./shoppingCart');