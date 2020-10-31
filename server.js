// Requiring necessary npm packages
const express = require("express");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const session = require("express-session");
const attorney = require("./routes/api/attorney");
const caseController = require("./routes/api/case");
const division = require("./routes/api/division");
const litigant = require("./routes/api/litigant");
const type = require("./routes/api/type");
const plaintiff = require("./routes/api/plaintiff");
const twilio = require("./routes/api/twilio");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes to use controllers
app.use(attorney);
app.use(caseController);
app.use(division);
app.use(litigant);
app.use(type);
app.use(plaintiff);
app.use(twilio);

// Set Handlebars
// Note that there is new handlebars feature that bugs with sequelize unless the "allowInsecurePrototypeAccess" workaround is used
app.engine(
  "handlebars",
  exphbs(
    { handlebars: allowInsecurePrototypeAccess(Handlebars) },
    { defaultLayout: "main" }
  )
);
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
require("./routes/html/html-routes.js")(app);
require("./routes/api/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
// Set force back to true to drop and recreate all tables on server startup
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
