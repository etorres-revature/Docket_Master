//adding dependencies necessary to run module
const express = require("express");
const router = express.Router();
const db = require("../../models");

//requiring the dotenv config file
require("dotenv").config();

//variables to hold environment variables
const accountSid = process.env.TWI_ACCNTSID;
const authToken = process.env.TWI_AUTHTOKEN;

//variable to hold the twilio library with passed in username and password
const client = require("twilio")(accountSid, authToken);

//function to send message via SMS
const sendSMSMsg = (message) => {
  client.messages
    .create({
      body: message,
      from: process.env.FROM_NUM,
      to: process.env.TO_NUM,
    })
    .then((message) => console.log(message));
};

//creating route to trigger the SMS function
router.get("/sms", async (req, res) => {
  //variable to hold the message to send via SMS
  const msg =
    "Hello from Docket Master.  Please check in as you have a case that needs attention.";

  //calling the SMS function
  await sendSMSMsg(msg);

  //calling the cases find all to populate the docketmaster view
  await db.findAll({
    include: [
      db.Type,
      db.Division,
      db.Plaintiff,
      db.PlaintiffAttorney,
      db.Defendant,
      db.DefenseAttorney,
    ],
  });

  //reloading the page after the SMS was sent
  res.reload("/docketmaster/view");
});

module.exports = router;
