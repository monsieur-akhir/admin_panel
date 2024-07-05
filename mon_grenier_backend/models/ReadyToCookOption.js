const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readyToCookOptionSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  preparationType: { type: String, required: true },
  additionalCost: { type: Number, required: true },
}, { timestamps: true });

const ReadyToCookOption = mongoose.model('ReadyToCookOption', readyToCookOptionSchema);

module.exports = ReadyToCookOption;
