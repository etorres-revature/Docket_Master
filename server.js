// Requiring necessary npm packages
var express = require("express");
var Handlebars = require("handlebars");
var exphbs = require("express-handlebars");
var { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
var session = require("express-session");
var attorney = require("./routes/api/attorney");
var caseController = require("./routes/api/case");
var division = require("./routes/api/division");
var litigant = require("./routes/api/litigant");
var type = require("./routes/api/type");

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(attorney);
app.use(caseController);
app.use(division);
app.use(litigant);
app.use(type);

// Set Handlebars
app.engine("handlebars", exphbs(
  { handlebars: allowInsecurePrototypeAccess(Handlebars) },
  { defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
require("./routes/html/html-routes.js")(app);
require("./routes/api/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
