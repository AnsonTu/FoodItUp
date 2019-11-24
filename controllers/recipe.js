const Recipes = require("../models/recipe");
const User = require("../models/user");
const Ingredient = require("../models/ingredient");
const Heap = require("heap");

const cmp = (a, b) => {
  return b[1] - a[1];
};

exports.convert = recipe => {
  recipe.ingredients = recipe.ingredients
    .substring(1, recipe.ingredients.length - 1)
    .split(",");
  recipe.instructions = recipe.instructions
    .substring(1, recipe.instructions.length - 1)
    .split(".,");
  return recipe;
};

exports.getRecipes = (req, res, next) => {
  User.findOne({ _id: req.user._id }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    const ingredientNames = existingUser.inventory.map(obj => {
      return obj.ingredientName;
    });

    Ingredient.find(
      { ingredient: { $in: ingredientNames } },
      (err, ingredients) => {
        if (err) return next(err);
        // function that will generate a save score of each
        let hash = {};
        for (let ingredient in ingredients) {
          const recipeIds = ingredients[ingredient].recipes
            .substring(3, ingredients[ingredient].recipes.length - 3)
            .split("', '");
          for (let indx in recipeIds) {
            indx = recipeIds[indx];
            hash[indx] = hash[indx] === undefined ? 1 : hash[indx]++;
          }
        }
        const countedIngredients = Object.keys(hash).map(function(key) {
          return [Number(key), Number(hash[key])];
        });
        const recIndex = Heap.nlargest(countedIngredients, 20, cmp).map(
          key => key[0]
        );

        Recipes.find({ index: { $in: recIndex } }, (error, recipes) => {
          if (error) return next(error);
          recipes.forEach(r => convert(r));
          res.json(recipes);
        });
      }
    );
  });
};
