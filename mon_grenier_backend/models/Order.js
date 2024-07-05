const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
