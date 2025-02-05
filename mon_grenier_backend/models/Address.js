const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
