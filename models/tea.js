var mongoose = require('mongoose');

var teaSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  caffeineScale: Number,
  price: Number,
  inStock: Boolean,
  rating: Number,
  imageUrl: String,
  categories: Array
});

var Tea = mongoose.model('tea', teaSchema);

module.exports = Tea;