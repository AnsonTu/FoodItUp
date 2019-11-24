const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const inventorySchema = Schema({
  ingredients: [
    {
      name: String,
      quantity: Number
    }
  ],
  userId: ObjectId
});

module.exports = mongoose.model("inventory", inventorySchema);
