/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./public/assets/js/signup.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("$(document).ready(function () {\n  // Getting references to our form and input\n  var signUpForm = $(\"form.signup\");\n  var emailInput = $(\"input#email-input\");\n  var passwordInput = $(\"input#password-input\");\n\n  // When the signup button is clicked, we validate the email and password are not blank\n  signUpForm.on(\"submit\", function (e) {\n    e.preventDefault();\n\n    var userData = {\n      email: emailInput.val().trim(),\n      password: passwordInput.val().trim(),\n    };\n\n    if (!userData.email || !userData.password) {\n      return;\n    }\n    // If we have an email and password, run the signUpUser function\n    signUpUser(userData.email, userData.password);\n    emailInput.val(\"\");\n    passwordInput.val(\"\");\n  });\n\n  // Does a post to the signup route. If successful, we are redirected to the members page\n  // Otherwise we log any errors\n  function signUpUser(email, password) {\n    $.post(\"/api/signup\", {\n      email: email,\n      password: password,\n    })\n      .then(function (data) {\n        window.location.replace(\"/docketmaster\");\n        // If there's an error, handle it by throwing up a bootstrap alert\n      })\n      .catch(handleLoginErr);\n  }\n\n  function handleLoginErr(err) {\n    $(\"#alert.msg\").text(err.responseJSON);\n    $(\"#alert\").fadeIn(500);\n  }\n});\n\n\n//# sourceURL=webpack://docket_master/./public/assets/js/signup.js?");
/******/ })()
;