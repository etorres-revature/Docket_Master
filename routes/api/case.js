const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

// router.get("/members", (req, res) => {
//   db.Case.findAll({}).then((cases) => {
//     res.render("members", {
//       cases
//     });
//   });
// });

//@route        GET /api/cases
//@desc         Get all cases
//@access       Public
router.get("/api/cases", (req, res) => {
  db.Case.findAll({}).then((cases) => {
    res.json(cases);
  });
});

//@route        GET /api/cases/:id
//@desc         Get case
//@access       Public
router.get("/api/cases/:id", (req, res) => {
  const { id } = req.params;
  db.Case.findOne({
    where: {
      id,
    },
  }).then((oneCase) => {
    res.json(oneCase);
  });
});

//@route        POST /api/cases
//@desc         Create new case
//@access       Public
router.post("api/cases", (req, res) => {
  db.Case.create(res.body).then((newCase) => {
    res.status(201).json(newCase);
  });
});

//@route        PUT /api/cases/:id
//@desc         Update case
//@access       Public
router.put("api/cases/:id", (req, res) => {
  const { id } = req.params;
  db.Case.update({
    where: {
      id,
    },
  }).then((updCase) => {
    res.json(updCase);
  });
});

//@route        DELETE /api/cases/:id
//@desc         Delete case
//@access       Public
router.delete("api/cases/:id", (req, res) => {
  const { id } = req.params;
  db.Case.destroy({
    where: {
      id,
    },
  }).then((delCase) => {
    res.json(delCase);
  });
});

module.exports = router;
