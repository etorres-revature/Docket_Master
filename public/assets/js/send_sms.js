  require("dotenv").config();
  const accountSid = process.env.TWI_ACCNTSID;
  const authToken = process.env.TWI_AUTHTOKEN;
  const client = require("twilio")(accountSid, authToken);

module.exports = (twilio) => {
  client.messages
    .create({
      body:
        "Hello from Docket Master.  Please check in as you have a case that needs attention.",
      from: process.env.FROM_NUM,
      to: process.env.TO_NUM,
    })
    .then((message) => console.log(message.sid));
  }
