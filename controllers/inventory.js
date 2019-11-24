const User = require("../models/user");
const Recipe = require("../models/recipe");
const RecipeController = require("../controllers/recipe");

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
  User.findOne({ _id: req.user._id }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      const ingredientCount = req.body.recipe.ingredient_count;
      //   console.log(ingredientCount);
      //   Object.keys();
      //   console.log(ingredientCount);
    }
  });
};

// TODO: Remove
exports.fakeRoute = (req, res, next) => {
  Recipe.findOne({ _id: "5dda03ea66b6edfd412bc899" }, function(err, recipe) {
    if (err) {
      return next(err);
    }
    recipe = RecipeController.convert(recipe);
    if (recipe) {
      res.json({ recipe });
    }
  });
};
