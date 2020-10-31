const db = require('./models');
const Case = db.Case;
const Defendant = db.Defendant;
const DefenseAttorney = db.DefenseAttorney;
const Division = db.Division;
const PlaintiffAttorney = db.PlaintiffAttorney;
const Plaintiff = db.Plaintiff;
const Type = db.Type;


Plaintiff.findOne({
    where: { FName: 'Rosina' },
    // include: [db.Type, db.Division, db.Plaintiff, db.PlaintiffAttorney, db.Defendant, db.DefenseAttorney],
}).then((plaintRestuls) => {

    Case.findOne({

        where: { PlaintiffId: plaintRestuls.dataValues.id },
        include: [db.Type, db.Division, db.Plaintiff, db.PlaintiffAttorney, db.Defendant, db.DefenseAttorney],
    }).then((caseResults) => {
        console.log(plaintRestuls.dataValues.id);
        console.log(caseResults);
    })
}).catch((err) => console.log("Error while searching: ", err))