const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipePackageSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  servings: { type: Number, required: true },
  instructions: { type: String },
}, { timestamps: true });

const RecipePackage = mongoose.model('RecipePackage', recipePackageSchema);

module.exports = RecipePackage;
