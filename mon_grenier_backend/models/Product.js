const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  isFresh: { type: Boolean, default: true },
  images: { type: [String] }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
