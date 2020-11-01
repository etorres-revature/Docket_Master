const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/plaintiffs
//@desc         Get all plaintiffs
//@access       Public
router.get("/api/plaintiffs", (req, res) => {
  db.Plaintiff.findAll({}).then((plaintiffs) => {
    res.json(plaintiffs);
  });
});

//@route        GET /api/plaintiffs/:id
//@desc         Get plaintiff
//@access       Public
router.get("/api/plaintiffs/:id", (req, res) => {
  const { id } = req.params;
  db.Plaintiff.findOne({
    where: {
      id,
    },
  }).then((plaintiff) => {
    res.json(plaintiff);
  });
});

//@route        POST /api/plaintiffs
//@desc         Create new plaintiff
//@access       Public
router.post("/api/plaintiffs", (req, res) => {
  db.Plaintiff.create(req.body).then((newPlaintiff) => {
    res.status(201).json(newPlaintiff);
  });
});

//@route        PUT /api/plaintiffs/:id
//@desc         Update plaintiff
//@access       Public
router.put("/api/plaintiffs/:id", (req, res) => {
  const { id } = req.params;
  db.Plaintiff.update({
    where: {
      id,
    },
  }).then((plaintiff) => {
    res.json(plaintiff);
  });
});

//@route        DELETE /api/plaintiffs/:id
//@desc         Delete plaintiff
//@access       Public
router.delete("/api/plaintiffs/:id", (req, res) => {
  const { id } = req.params;
  db.Plaintiff.destroy({
    where: {
      id,
    },
  }).then((plaintiff) => {
    res.json(plaintiff);
  });
});

module.exports = router;
