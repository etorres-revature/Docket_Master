const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/defendants
//@desc         Get all defendants
//@access       Private
router.get("/api/defendants", (req, res) => {
  db.Defendant.findAll({}).then((defendants) => {
    res.json(defendants);
  });
});

//@route        GET /api/defendants/:id
//@desc         Get defendants
//@access       Private
router.get("/api/defendants/:id", (req, res) => {
  const { id } = req.params;
  db.Defendant.findOne({
    where: {
      id,
    },
  }).then((defendant) => {
    res.json(defendant);
  });
});

//@route        POST /api/defendants
//@desc         Create new defendants
//@access       Private
router.post("/api/defendants", (req, res) => {
  db.Defendant.create(req.body).then((newDefendant) => {
    res.status(201).json(newDefendant);
  });
});

//@route        PUT /api/defendants/:id
//@desc         Update defendants
//@access       Private
router.put("/api/defendants/:id", (req, res) => {
  const { id } = req.params;
  db.Defendant.update({
    where: {
      id,
    },
  }).then((defendant) => {
    res.json(defendant);
  });
});

//@route        DELETE /api/defendant/:id
//@desc         Delete defendant
//@access       Private
router.delete("/api/defendants/:id", (req, res) => {
  const { id } = req.params;
  db.Defendant.destroy({
    where: {
      id,
    },
  }).then((defendant) => {
    res.json(defendant);
  });
});

module.exports = router;
