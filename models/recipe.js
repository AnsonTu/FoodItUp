const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  // TODO: Group by allergens
  index: Number,
  prep_time: Number,
  review_count: Number,
  description: String,
  total_time: Number,
  ratings: Number,
  cook_time: Number,
  author: String,
  name: String,
  photo_url: String,
  instructions: String
});

module.exports = mongoose.model("recipe", recipeSchema);
