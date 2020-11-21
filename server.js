// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const session = require("express-session");
const caseController = require("./routes/api/case");
const defendant = require("./routes/api/defendant");
const defAtty = require("./routes/api/defense_attorney");
const division = require("./routes/api/division");
const plaintAty = require("./routes/api/plaintiff_attorney");
const plaintiff = require("./routes/api/plaintiff");
const twilio = require("./routes/api/twilio");
const type = require("./routes/api/type");
const compression = require("compression");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for parsing information from the body or displaying static information
const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//routes to use controllers - api to backend
app.use(caseController);
app.use(defendant);
app.use(defAtty);
app.use(division);
app.use(plaintAty);
app.use(plaintiff);
app.use(twilio);
app.use(type);

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
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
//using passport library
app.use(passport.initialize());
app.use(passport.session());

// Requiring our passport routes for authentication
require("./routes/api/api-routes.js")(app);
require("./routes/html/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
// Set force back to true to drop and recreate all tables on server startup
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(
      `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    );
  });
});
