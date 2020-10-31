const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/defense_attorneys
//@desc         Get all defense attorneys
//@access       Public
router.get("/api/defense_attorneys", (req, res) => {
  db.DefenseAttorney.findAll({}).then((defAttys) => {
    res.json(defAttys);
  });
});

//@route        GET /api/defense_attorneys/:id
//@desc         Get defense attorney
//@access       Public
router.get("/api/defense_attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.DefenseAttorney.findOne({
    where: {
      id,
    },
  }).then((defAtty) => {
    res.json(defAtty);
  });
});

//@route        POST /api/defense_attorneys
//@desc         Create new defense attorneys
//@access       Public
router.post("api/defense_attorneys", (req, res) => {
  db.DefenseAttorney.create(res.body).then((newDefAtty) => {
    res.status(201).json(newDefAtty);
  });
});

//@route        PUT /api/defense_attorneys/:id
//@desc         Update defense attorney
//@access       Public
router.put("api/defense_attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.DefenseAttorney.update({
    where: {
      id,
    },
  }).then((defAtty) => {
    res.json(defAtty);
  });
});

//@route        DELETE /api/defense_attorneys/:id
//@desc         Delete defense attorney
//@access       Public
router.delete("api/defense_attorney/:id", (req, res) => {
  const { id } = req.params;
  db.DefenseAttorney.destroy({
    where: {
      id,
    },
  }).then((defAtty) => {
    res.json(defAtty);
  });
});

module.exports = router;
