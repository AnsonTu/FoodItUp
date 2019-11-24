const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = Schema(
  {
    ingredient: String,
    recipes: String
  },
  { collection: "ingredient" }
);

module.exports = mongoose.model("ingredient", ingredientSchema, "ingredient");
