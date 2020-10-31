const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/plaintiff_attorneys
//@desc         Get all plaintiff attorneys
//@access       Public
router.get("/api/plaintiff_attorneys", (req, res) => {
  db.PlaintiffAttorney.findAll({}).then((plaintAttys) => {
    res.json(plaintAttys);
  });
});

//@route        GET /api/plaintiff_attorney/:id
//@desc         Get plaintiff attorney
//@access       Public
router.get("/api/plaintiff_attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.PlaintiffAttorney.findOne({
    where: {
      id,
    },
  }).then((plaintAtty) => {
    res.json(plaintAtty);
  });
});

//@route        POST /api/plaintiff_attorney
//@desc         Create new plaintiff attorney
//@access       Public
router.post("/api/plaintiff_attorneys", (req, res) => {
  db.PlaintiffAttorney.create(req.body).then((newPlaintAtty) => {
    res.status(201).json(newPlaintAtty);
  });
});

//@route        PUT /api/plaintiff_attorney/:id
//@desc         Update plaintiff attorney
//@access       Public
router.put("/api/plaintiff_attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.PlaintiffAttorney.update({
    where: {
      id,
    },
  }).then((plaintAtty) => {
    res.json(plaintAtty);
  });
});

//@route        DELETE /api/plaintiff_attorney/:id
//@desc         Delete plaintiff attorney
//@access       Public
router.delete("/api/plaintiff_attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.PlaintiffAttorney.destroy({
    where: {
      id,
    },
  }).then((plaintAtty) => {
    res.json(plaintAtty);
  });
});

module.exports = router;
