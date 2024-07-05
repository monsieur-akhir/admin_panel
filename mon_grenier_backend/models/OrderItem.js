const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;
