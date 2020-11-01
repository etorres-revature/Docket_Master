require("dotenv").config();
const db = require('./models');
const Case = db.Case;
const Defendant = db.Defendant;
const DefenseAttorney = db.DefenseAttorney;
const Division = db.Division;
const PlaintiffAttorney = db.PlaintiffAttorney;
const Plaintiff = db.Plaintiff;
const Type = db.Type;


// Case.findAll({
//    
//     include: [db.Type, db.Division, db.Plaintiff, db.PlaintiffAttorney, db.Defendant, db.DefenseAttorney],
// }).then((results) => {
//     console.log(results)
// }).catch((err) => console.log("Error while searching user : ", err))

Case.findOne({
    where: { id: 4 },
    include: [db.Type, db.Division, db.Plaintiff, db.PlaintiffAttorney, db.Defendant, db.DefenseAttorney],
}).then((results) => {
    console.log(results)
}).catch((err) => console.log("Error while searching user : ", err))