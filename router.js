const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const MealController = require("./controllers/meal");
const UserController = require("./controllers/user");
const Inventory = require("./controllers/inventory");
const Recipe = require("./controllers/recipe");
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
  //TODO: Remove test route
  app.get("/inventory/recipes", Inventory.fakeRoute);
  //
  app.get("/user/stats", requireAuth, UserController.stats);
  app.post("/meal/new", requireAuth, MealController.new);
  app.post("/meal/update/recipe", requireAuth, MealController.updateRecipe);
  app.post(
    "/meal/update/completion",
    requireAuth,
    MealController.updateCompletion
  );
  app.get("recipe/view", requireAuth, Recipe.getRecipes);
  app.delete("/meal/delete", MealController.delete);
};
