const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

// This doesn't work because we already have a get route for /members in case.js
// router.get("/members", (req, res) => {
//   db.Division.findAll({}).then((divisions) => {
//     res.render("members", {
//       divisions
//     });
//   });
// });

//@route        GET /api/divisions
//@desc         Get all divisions
//@access       Public
router.get("/api/divisions", (req, res) => {
  console.log("division api running")
  db.Division.findAll({}).then((divisions) => {
    res.json(divisions);
  });
});

//@route        GET /api/divisions/:id
//@desc         Get division
//@access       Public
router.get("/api/divisions/:id", (req, res) => {
  const { id } = req.params;
  db.Division.findOne({
    where: {
      id,
    },
  }).then((division) => {
    res.json(division);
  });
});

//@route        POST /api/divisions
//@desc         Create new division
//@access       Public
router.post("api/divisions", (req, res) => {
  db.Division.create(req.body).then((newDiv) => {
    res.status(201).json(newDiv);
  });
});

//@route        PUT /api/divisions/:id
//@desc         Update division
//@access       Public
router.put("api/divisions/:id", (req, res) => {
  const { id } = req.params;
  db.Division.update({
    where: {
      id,
    },
  }).then((division) => {
    res.json(division);
  });
});

//@route        DELETE /api/division/:id
//@desc         Delete division
//@access       Public
router.delete("api/divisions/:id", (req, res) => {
  const { id } = req.params;
  db.Division.destroy({
    where: {
      id,
    },
  }).then((division) => {
    res.json(division);
  });
});

module.exports = router;
