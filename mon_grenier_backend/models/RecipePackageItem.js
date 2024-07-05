const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipePackageItemSchema = new Schema({
  package: { type: Schema.Types.ObjectId, ref: 'RecipePackage' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
});

const RecipePackageItem = mongoose.model('RecipePackageItem', recipePackageItemSchema);

module.exports = RecipePackageItem;
