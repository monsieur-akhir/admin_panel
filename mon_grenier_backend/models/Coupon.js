const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponSchema = new Schema({
  code: { type: String, unique: true, required: true },
  discountType: { type: String, required: true }, // e.g., 'percentage', 'fixed'
  discountValue: { type: Number, required: true },
  expirationDate: { type: Date },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
