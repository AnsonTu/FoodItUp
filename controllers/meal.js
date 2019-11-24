const MealModel = require("../models/meal");

exports.new = (req, res, next) => {
  const newMeal = new MealModel({
    day: req.body.day,
    userId: req.user._id,
    recipeId: req.body.recipeId,
    completion: req.body.completion,
    mealTime: req.body.mealTime
  });
  newMeal.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Success");
  });
};

exports.updateRecipe = (req, res, next) => {
  MealModel.update(
    { _id: req.body.id },
    { recipeId: req.body.recipeId },
    err => {
      if (err) {
        return next(err);
      }
      res.send("Success");
    }
  );
};

exports.updateCompletion = (req, res, next) => {
  MealModel.update(
    { _id: req.body.id },
    { completion: req.body.completion },
    err => {
      if (err) {
        return next(err);
      }
      res.send("Success");
    }
  );
};

exports.delete = (req, res, next) => {
  MealModel.deleteOne({ _id: req.body.id }, err => {
    if (err) {
      return next(err);
    }
    res.send("Success");
  });
};

// meal ingredient count
