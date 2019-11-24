const User = require("../models/user");
const Recipe = require("../models/recipe");

exports.getInventory = (req, res, next) => {
  User.findOne({ _id: req.user._id }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.json(existingUser.inventory);
    }
  });
};

exports.updateInventory = (req, res, next) => {
  User.findOne({ _id: req.user._id }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      existingUser.inventory = req.body.user.inventory;
    }
    existingUser
      .save()
      .then(() => res.json(existingUser.inventory))
      .catch(err => res.status(400).json("Error: " + err));
  });
};

exports.makeMeal = (req, res, next) => {
  Recipe.findOne({ _id: "5dda03ea66b6edfd412bc899" }, function(
    err,
    existingUser
  ) {
    if (err) {
      return next(err);
    }
    console.log(existingUser);

    if (existingUser) {
      res.json({ index: req.body.index });
    }
  });
};

// TODO: Remove
exports.fakeRoute = (req, res, next) => {
  Recipe.findOne({ _id: "5dda03ea66b6edfd412bc899" }, function(err, recipe) {
    if (err) {
      return next(err);
    }

    if (recipe) {
      res.json({ recipe });
    }
  });
};
