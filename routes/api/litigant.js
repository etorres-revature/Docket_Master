const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/litigants
//@desc         Get all litigants
//@access       Public
router.get("/api/litigants", (req, res) => {
  db.Litigant.findAll({}).then((litigants) => {
    res.json(litigants);
  });
});

//@route        GET /api/litigants/:id
//@desc         Get litigant
//@access       Public
router.get("/api/litigants/:id", (req, res) => {
  const { id } = req.params;
  db.Litigant.findOne({
    where: {
      id,
    },
  }).then((litigant) => {
    res.json(litigant);
  });
});

//@route        POST /api/litigants
//@desc         Create new litigant
//@access       Public
router.post("api/litigants", (req, res) => {
  db.Litigant.create(res.body).then((newLitigant) => {
    res.status(201).json(newLitigant);
  });
});

//@route        PUT /api/litigants/:id
//@desc         Update litigant
//@access       Public
router.put("api/litigants/:id", (req, res) => {
  const { id } = req.params;
  db.Litigant.update({
    where: {
      id,
    },
  }).then((litigant) => {
    res.json(litigant);
  });
});

//@route        DELETE /api/litigants/:id
//@desc         Delete litigant
//@access       Public
router.delete("api/litigants/:id", (req, res) => {
  const { id } = req.params;
  db.Litigant.destroy({
    where: {
      id,
    },
  }).then((litigant) => {
    res.json(litigant);
  });
});

module.exports = router;
