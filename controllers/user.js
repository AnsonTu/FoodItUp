const UserModel = require("../models/user");
const MealModel = require("../models/meal");
const mongoose = require("mongoose");

exports.stats = (req, res, next) => {
  const id = mongoose.Schema.Types.ObjectId("5dd9d8121c9d440000514d63");
  MealModel.find({ _id: "5dd9d649d48304624b24c9a8" }, (err, meals) => {
    if (err) console.log(err);
    const totalCompleted =
      meals.reduce((acc, curr) => {
        acc += curr.completion ? 1 : 0;
      }, 0) || 0;

    res.json({
      meals,
      totalCompleted,
      total: meals.length
    });
  });
};
