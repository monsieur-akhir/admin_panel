const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  paymentMethod: { type: String, required: true }, // e.g., 'Credit Card', 'Mobile Money'
  paymentStatus: { type: String, required: true }, // e.g., 'Pending', 'Completed', 'Failed'
  transactionId: { type: String },
  amount: { type: Number, required: true },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
