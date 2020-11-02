const express = require("express");
const router = express.Router();
const db = require("../../models");

require("dotenv").config();
const accountSid = process.env.TWI_ACCNTSID;
const authToken = process.env.TWI_AUTHTOKEN;
const client = require("twilio")(accountSid, authToken);

const sendSMSMsg = (message) => {
  client.messages
    .create({
      body: message,
      from: process.env.FROM_NUM,
      to: process.env.TO_NUM,
    })
    .then((message) => console.log(message));
};

router.get("/sms", async (req, res) => {
  const msg =
    "Hello from Docket Master.  Please check in as you have a case that needs attention.";

  await sendSMSMsg(msg);

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

  res.reload("/docketmaster/view");
});

module.exports = router;
