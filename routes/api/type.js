const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/types
//@desc         Get all case types
//@access       Public
router.get("/api/types", (req, res) => {
  db.Type.findAll({}).then((types) => {
    res.json(types);
  });
});

//@route        GET /api/types/:id
//@desc         Get case type
//@access       Public
router.get("/api/types/:id", (req, res) => {
  const { id } = req.params;
  db.Type.findOne({
    where: {
      id,
    },
  }).then((type) => {
    res.json(type);
  });
});

//@route        POST /api/types
//@desc         Create new case type
//@access       Public
router.post("/api/types", (req, res) => {
  db.Type.create(req.body).then((newType) => {
    res.status(201).json(newType);
  });
});

//@route        PUT /api/types/:id
//@desc         Update type
//@access       Public
router.put("/api/types/:id", (req, res) => {
  const { id } = req.params;
  db.Type.update({
    where: {
      id,
    },
  }).then((type) => {
    res.json(type);
  });
});

//@route        DELETE /api/types/:id
//@desc         Delete type
//@access       Public
router.delete("/api/types/:id", (req, res) => {
  const { id } = req.params;
  db.Type.destroy({
    where: {
      id,
    },
  }).then((type) => {
    res.json(type);
  });
});

module.exports = router;
