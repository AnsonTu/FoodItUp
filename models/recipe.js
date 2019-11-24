const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    // TODO: Group by allergens
    index: Number,
    prep_time: Number,
    review_count: Number,
    description: String,
    ingredients: mongoose.Schema.Types.Mixed,
    total_time: Number,
    ratings: Number,
    cook_time: Number,
    author: String,
    name: String,
    photo_url: String,
    instructions: mongoose.Schema.Types.Mixed,
    ingredient_count: String
  },
  { collection: "recipe" }
);

module.exports = mongoose.model("recipe", recipeSchema, "recipe");
