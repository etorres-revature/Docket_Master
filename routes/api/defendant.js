const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/defendants
//@desc         Get all defendants
//@access       Public
router.get("/api/defendants", (req, res) => {
  db.Defendant.findAll({}).then((defendants) => {
    res.json(defendants);
  });
});

//@route        GET /api/defendants/:id
//@desc         Get defendants
//@access       Public
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
//@access       Public
router.post("api/defendant", (req, res) => {
  db.Defendant.create(res.body).then((newDefendant) => {
    res.status(201).json(newDefendant);
  });
});

//@route        PUT /api/defendants/:id
//@desc         Update defendants
//@access       Public
router.put("api/defense_attorneys/:id", (req, res) => {
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
//@access       Public
router.delete("api/defendant/:id", (req, res) => {
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
