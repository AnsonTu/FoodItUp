const MealModel = require("../models/meal");

exports.save = (req, res, next) => {
  const meal = req.meal;
  const newMeal = new MealModel({ meal }, (err, res) => {
    if (err) {
      res.err("Could not add model");
      return;
    }
    res.send("Success"); // for now
  });
};
