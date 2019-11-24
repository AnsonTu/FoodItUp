const Recipes = require("../models/recipe");

exports.getRecipes = (req, res, next) => {
  User.findOne({ userId: req.user._id }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.json({ recipes: recipes, inventory: inventory });
    }
  });
};
