const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

//@route        GET /api/attorneys
//@desc         Get all attorneys
//@access       Public
router.get("/api/attorneys", (req, res) => {
  db.Attorney.finAll({}).then((attys) => {
    res.json(attys);
  });
});

//@route        GET /api/attorneys/:id
//@desc         Get attorney
//@access       Public
router.get("/api/attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.Attorney.findOne({
    where: {
      id,
    },
  }).then((atty) => {
    res.json(atty);
  });
});

//@route        POST /api/attorneys
//@desc         Create new attorney
//@access       Public
router.post("api/attorneys", (req, res) => {
  db.Attorney.create(res.body).then((newAtty) => {
    res.status(201).json(newAtty);
  });
});

//@route        PUT /api/attorneys/:id
//@desc         Update attorney
//@access       Public
router.put("api/attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.Attorney.update({
    where: {
      id,
    },
  }).then((atty) => {
    res.json(atty);
  });
});

//@route        DELETE /api/attorneys/:id
//@desc         Delete attorney
//@access       Public
router.delete("api/attorneys/:id", (req, res) => {
  const { id } = req.params;
  db.Attorney.destroy({
    where: {
      id,
    },
  }).then((atty) => {
    res.json(atty);
  });
});
