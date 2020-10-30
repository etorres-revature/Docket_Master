'use strict';
const faker = require('faker');
const DefenseAttorneys = [...Array(100)].map((DefenseAttorneys) => ({
    def_attorneyFName: faker.name.firstName(),
    def_attorneyLName: faker.name.lastName(),
    barNumber: faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date()

}))


module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('DefenseAttorneys', DefenseAttorneys, {})

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('DefenseAttorneys', null, {});

    }
};