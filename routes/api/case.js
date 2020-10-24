const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");


//@route        GET / 
//@desc         Get all cases
//@access        Public
router.get("/", (req, res) => {
    db.Case.finAll({}).then( cases => {
        res.json(cases)
    }).catch(err => {
        res.status(500).json({ msg: err.message});
    })
})

//@route        GET /api/cases/:id 
//@desc         Get case
//@access       Public
router.get("api/cases:id", (req, res) => {
    db.Case.findOne({
        where: {
            id
        }
    }).then( case => {
        res.json(case);
    });
});
        

//@route        POST /api/cases
//@desc         Create new case
//@access       Public
router.post("api/cases", (req, res) => {
db.Case.create(res.body).then(newCase => {
    res.status(201).json(newCase)
})
})

//@route        PUT /api/cases/:id
//@desc         Update case
//@access       Public
router.put("api/cases/:id", (req,res) => {
    db.Case.update({
        where: {
            id: req.body.id
        }
    }).then(case => {
        res.json(case);
    })
})


//@route        DELETE /api/cases
//@desc         Delete case
//@access       Public
router.delete("api/cases/:id", (req, res) => {
    db.Case.destroy({
        where: {
            id: req.params.id
        }
    }).then( case => {
        res.json(case);
    })
})
