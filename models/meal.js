const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const mealSchema = Schema({
  day: Date,
  recipe: ObjectId,
  userId: ObjectId,
  completion: Boolean
});

module.exports = mongoose.model("meal", mealSchema);
