const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body:
      "Hello from Docket Master.  Please check in as you have a case that needs attention.",
    from: "+12564856150",
    to: "+15047220278",
  })
  .then((message) => console.log(message.sid));
