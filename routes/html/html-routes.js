const db = require("../../models");

// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // Comment out pre-handlebars res.sendFile function
    // res.sendFile(path.join(__dirname, "../public/signup.html"));

    // Insert route to handlebars instead of /public/signup.html
    res.render("signup.handlebars");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // Comment out pre-handlebars res.sendFile function
    // res.sendFile(path.join(__dirname, "../public/login.html"));

    // Insert route to handlebars instead of /public/login.html
    res.render("login.handlebars");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", function (req, res) {
    // Comment out pre-handlebars res.sendFile function
    // res.sendFile(path.join(__dirname, "../public/members.html"));

    // Insert route to handlebars instead of /public/members.html
    res.render("members.handlebars");
  });

};
