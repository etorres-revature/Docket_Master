const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");

// Route to populate all cases on /members
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
    db.Case.findAll({ include: [db.Type, db.Division, db.Plaintiff, db.PlaintiffAttorney, db.Defendant, db.DefenseAttorney] }).then((cases) => {
        console.log(cases);
        res.json(cases);
    }).catch((err) => console.log("Error while searching : ", err));
});

//@route        GET /api/cases/:id
//@desc         Get case
//@access       Public
router.get("/api/cases/:id", (req, res) => {
    const { id } = req.params;
    db.Case.findOne({
        // where: {
        //   id,
        // },
        // include: [db.Type, db.Division, "Attorneyp", "Attorneyd", "plaint", "def"],

        where: { id },
        include: [db.Type, db.Division, db.Plaintiff, db.PlaintiffAttorney, db.Defendant, db.DefenseAttorney],
    }).then((oneCase) => {
        console.log(oneCase);
        res.json(oneCase);
    }).catch((err) => console.log("Error while searching : ", err));
});

// Add search routing to the get case routers

router.get("/search/casenumber", (req, res) => {
    let { caseNumber } = req.query;
    db.Case.findAll({
        where: {
            caseNumber
        }
    })
        .then(cases => {
            res.render("docketmaster", { cases })
        })
        .catch(err => {
            res.render("error", { error: err })
            console.log(req.query);
        });
});

router.get("/search/plaintiff", async (req, res) => {
    let { pLName } = req.query;
    const allCases = await db.Case.findAll({
        include: db.Plaintiff
    });
    console.log(allCases[0].dataValues.Plaintiff.LName);
    // db.Case.findAll({
    //     include: [db.Type, db.Division, db.Plaintiff, db.PlaintiffAttorney, db.Defendant, db.DefenseAttorney],
    //     where: {
    //         Plaintiff: LName
    //     }
    // })
    //     .then(cases => {
    //         res.render("docketmaster", { cases })
    //     })
    //     .catch(err => {
    //         res.render("error", { error: err })
    //         console.log(req.query);
    //     });
});

router.get("/search/plaintiff-attorney", (req, res) => {

})

router.get("/search/defendant", (req, res) => {

})

router.get("/search/defense-attorney", (req, res) => {

})

router.get("/search/division", (req, res) => {
    let division = req.query;
})



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