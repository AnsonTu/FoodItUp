const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = Schema({
  // TODO: Allergens, calorie count,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String,
  recipeIds: [ObjectId],
  inventory: [
    {
      ingredientName: String,
      quantity: Number
    }
  ]
});

userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model("user", userSchema);
