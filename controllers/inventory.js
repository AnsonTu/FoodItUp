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
      let ingredientCount = req.body.recipe.ingredient_count;
      ingredientCount = ingredientCount
        .substring(3, ingredientCount.length - 1)
        .split(", u'");
      ingredientCount = ingredientCount.reduce((obj, r) => {
        const arr = r.split("': ");
        obj[arr[0]] = Number(arr[1]);
        return obj;
      }, {});
      const inv = existingUser.inventory;
      for (var i = 0; i < inv.length; i++) {
        const name = inv[i].ingredientName;
        if (ingredientCount[name] === undefined) {
          continue;
        }
        inv[i].quantity -= ingredientCount[name];
        if (inv[i].quantity <= 0) {
          delete inv[i];
          inv.splice(i, 1);
        }
      }
      existingUser
        .save()
        .then(() => res.json(existingUser.inventory))
        .catch(err => res.status(400).json("Error: " + err));
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
