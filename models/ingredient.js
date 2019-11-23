const mongoose = require("mongoose");
const Schema = mongoose.schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ingredientSchema = new Schema({
  name: String,
  recipes: [ObjectId]
});

module.exports = mongoose.model("ingredient", ingredientSchema);
