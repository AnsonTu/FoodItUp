const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const MealController = require("./controllers/meal");
const UserController = require("./controllers/user");
const Inventory = require("./controllers/inventory");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Test");
  });
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
  app.get("/inventory/view", requireAuth, Inventory.getInventory);
  app.post("/inventory/update", requireAuth, Inventory.updateInventory);
  app.post("/inventory/makemeal", requireAuth, Inventory.makeMeal);
  app.get("/user/stats", UserController.stats);
  app.post("/meal/new", MealController.new);
  app.post("/meal/update/recipe", MealController.updateRecipe);
  app.post("/meal/update/completion", MealController.updateCompletion);
  app.delete("/meal/delete", MealController.delete);
};
