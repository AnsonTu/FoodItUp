const UserModel = require("../models/user");
const MealModel = require("../models/meal");

exports.stats = (req, res, next) => {
  MealModel.find({ userId: req.user._id }, (err, meals) => {
    if (err) return next(err);
    const totalCompleted =
      meals.reduce((acc, curr) => {
        acc += curr.completion ? 1 : 0;
        return acc;
      }, 0) || 0;

    res.json({
      meals,
      totalCompleted,
      total: meals.length
    });
  });
}; // work on later
