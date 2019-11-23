const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  // TODO: Group by allergens
  name: String,
  ingredients: [String],
  time: {
    prep: Number,
    cook: Number
  },
  picUrl: String,
  step: String,
  calories: Number
});

module.exports mongoose.model("recipe", recipeSchema);
