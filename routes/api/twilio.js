const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");
const router = express.Router();

router.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message(
    "Thanks for your reply.  A Docket Master representative will review this information and be in touch with you shortly."
  );

  res.writeHead(200, { "Content-Type": "text/xml" });

  res.end(twiml.toString());
});

module.exports = router;
