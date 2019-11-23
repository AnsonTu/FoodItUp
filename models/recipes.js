const mongoose = require("mongoose");
const Schema = mongoose.schema;

const recipeSchema = new Schema({
  // TODO: Group by allergens
  name: String,
  ingredients: [[String]],
  time: Number,
  calories: Number
});

module.exports = mongoose.default("recipe", recipeSchema);
