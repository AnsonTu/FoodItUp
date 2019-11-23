const mongoose = require("mongoose");
const Schema = mongoose.schema;

const userSchema = Schema({
  // TODO: Allergens, calorie count,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String,
  recipeIds: Object
});

module.exports = mongoose.model("user", userSchema);
