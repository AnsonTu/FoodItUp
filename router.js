const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Test");
  });
  app.get("/feature", requireSignin, function(req, res) {
    res.send("Signed in");
  });
};
