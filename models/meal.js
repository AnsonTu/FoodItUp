const mongoose = require("mongoose");
const Schema = mongoose.schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const mealSchema = Schema({
  day: Date,
  recipe: ObjectId,
  userId: ObjectId
});

module.exports = mongoose.model("meal", mealSchema);
