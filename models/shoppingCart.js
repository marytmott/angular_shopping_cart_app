var mongoose = require('mongoose');

var shoppingCartSchema = new mongoose.Schema({
  items: Array
  /*items: [
      {
        id: mongoose_id,
        quantity: 1
      }
    ]
    */
    //push in key-value pair and quantity
});

var ShoppingCart = mongoose.model('shoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;