"use strict";


let PlaintiffId = 1;
let PlaintiffAttorneyId = 1;
let DefendantId = 1;
let DefenseAttorneyId = 1;

const faker = require('faker');
const Cases = [...Array(100)].map((Cases) => ({

    caseNumber: faker.finance.bitcoinAddress(),
    caption: "xxxx vs xxxx",
    divisionId: Math.floor(Math.random() * 2) + 1,
    PlaintiffId: PlaintiffId++,
    PlaintiffAttorneyId: PlaintiffAttorneyId++,
    DefendantId: DefendantId++,
    DefenseAttorneyId: DefenseAttorneyId++,
    TypeId: Math.floor(Math.random() * 3) + 1,
    amntCntrvsy: Math.floor(Math.random() * 100000) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),

}))

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Cases', Cases, {})

    },



    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Cases", null, {});
    },
};


// module.exports = {
//     up: async(queryInterface, Sequelize) => {
//         await queryInterface.bulkInsert(
//             "Cases", [{
//                     caseNumber: "145svdx",
//                     caption: "Some Stuff",
//                     divisionId: 2,
//                     PlaintiffId: 1,
//                     PlaintiffAttorneyId: 1,
//                     DefendantId: 2,
//                     DefenseAttorneyId: 2,
//                     TypeId: 1,
//                     amntCntrvsy: 500,
//                     createdAt: new Date(),
//                     updatedAt: new Date(),
//                 },
//                 {
//                     caseNumber: "76fghwex",
//                     caption: "More Stuff",
//                     divisionId: 1,
//                     PlaintiffId: 26,
//                     PlaintiffAttorneyId: 35,
//                     DefendantId: 78,
//                     DefenseAttorneyId: 4,
//                     TypeId: 2,
//                     amntCntrvsy: 450,
//                     createdAt: new Date(),
//                     updatedAt: new Date(),
//                 },
//                 {
//                     caseNumber: "34535Sectvt",
//                     caption: "All kinds of Stuff",
//                     divisionId: 2,
//                     PlaintiffId: 78,
//                     PlaintiffAttorneyId: 23,
//                     DefendantId: 87,
//                     DefenseAttorneyId: 17,
//                     TypeId: 3,
//                     amntCntrvsy: 6000,
//                     createdAt: new Date(),
//                     updatedAt: new Date(),
//                 },
//             ], {}
//         );
//     },