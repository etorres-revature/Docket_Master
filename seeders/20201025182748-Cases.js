'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Cases', [{
            caseNumber: 'ABC-123',
            caption: "test v. test",
            divisionId: 2,
            Plaintiff: 1,
            pAttorney: 1,
            Defendant: 2,
            dAttorney: 2,
            typeId: 1,
            amntCntrvsy: 500,
            createdAt: new Date(),
            updatedAt: new Date()

        },
        {
            caseNumber: 'DEF-456',
            caption: "test2 v.test2",
            divisionId: 1,
            Plaintiff: 4,
            pAttorney: 3,
            Defendant: 3,
            dAttorney: 4,
            typeId: 2,
            amntCntrvsy: 450,
            createdAt: new Date(),
            updatedAt: new Date()

        },
        {
            caseNumber: 'HIJ-789',
            caption: "test3 v.test3",
            divisionId: 2,
            Plaintiff: 3,
            pAttorney: 3,
            Defendant: 2,
            dAttorney: 4,
            typeId: 2,
            amntCntrvsy: 6000,
            createdAt: new Date(),
            updatedAt: new Date()

        }
        ], {});

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Cases', null, {});

    }
};