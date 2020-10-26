'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Attorneys', [{
                attorneyFName: 'Bugs',
                attorneyLName: 'Bunney',
                barNumber: 123,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                attorneyFName: 'Daffy',
                attorneyLName: 'Duck',
                barNumber: 456,
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                attorneyFName: 'Elmer',
                attorneyLName: 'Fudd',
                barNumber: 789,
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                attorneyFName: 'Porky',
                attorneyLName: 'Pig',
                barNumber: 543,
                createdAt: new Date(),
                updatedAt: new Date()

            },

        ], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Attorneys', null, {});

    }
};