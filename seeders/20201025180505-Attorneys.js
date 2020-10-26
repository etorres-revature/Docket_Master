'use strict';
const faker = require('faker');
const attorneys = [...Array(100)].map((attorneys) => ({
    attorneyFName: faker.name.firstName(),
    attorneyLName: faker.name.lastName(),
    barNumber: faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date()

}))


module.exports = {
    up: async(queryInterface, Sequelize) => {

        Example: await queryInterface.bulkInsert('Attorneys', attorneys, {})
            // [{
            //         attorneyFName: 'Bugs',
            //         attorneyLName: 'Bunney',
            //         barNumber: 123,
            //         createdAt: new Date(),
            //         updatedAt: new Date()
            //     },
            //     {
            //         attorneyFName: 'Daffy',
            //         attorneyLName: 'Duck',
            //         barNumber: 456,
            //         createdAt: new Date(),
            //         updatedAt: new Date()

        //     },
        //     {
        //         attorneyFName: 'Elmer',
        //         attorneyLName: 'Fudd',
        //         barNumber: 789,
        //         createdAt: new Date(),
        //         updatedAt: new Date()

        //     },
        //     {
        //         attorneyFName: 'Porky',
        //         attorneyLName: 'Pig',
        //         barNumber: 543,
        //         createdAt: new Date(),
        //         updatedAt: new Date()

        //     },

        // ], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Attorneys', null, {});

    }
};