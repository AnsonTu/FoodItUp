const Inventory = require("../models/inventory");

exports.getInventory = (req, res, next) => {
  User.findOne({ userId: req.userId }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.json(existingUser.inventory);
    }
  });
};

exports.updateInventory = (req, res, next) => {
  User.findOne({ userId: req.userId }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      const inventory = existingUser.inventory;
    }
  });
};

exports.makeMeal = (req, res, next) => {
  User.findOne({ userId: req.userId }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      const inventory = existingUser.inventory;
    }
  });
};
