const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const mealSchema = Schema({
  day: Date,
  recipeId: ObjectId,
  userId: ObjectId,
  completion: Boolean,
  mealTime: String
});

module.exports = mongoose.model("meal", mealSchema);
