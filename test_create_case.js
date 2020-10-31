const db = require('./models');
const Case = db.Case;
const Defendant = db.Defendant;
const DefenseAttorney = db.DefenseAttorney;
const Division = db.Division;
const PlaintiffAttorney = db.PlaintiffAttorney;
const Plaintiff = db.Plaintiff;
const Type = db.Type;


Case.create({
    caseNumber: "35897cvsc2",
    caption: "xxxx vs xxxx",
    DivisionId: 1,
    PlaintiffId: 34,
    PlaintiffAttorneyId: 35,
    DefendantId: 90,
    DefenseAttorneyId: 22,
    TypeId: 3,
    amntCntrvsy: 50000,
    createdAt: new Date(),
    updatedAt: new Date(),
}).then((results) => {
    console.log(results)
}).catch((err) => console.log("Error while searching user : ", err))