'use strict';
const faker = require('faker');
const Defendants = [...Array(100)].map((Defendants) => ({
    FName: faker.name.firstName(),
    LName: faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()

}))

module.exports = {
    up: async(queryInterface, Sequelize) => {


        Example: await queryInterface.bulkInsert('Defendants', Defendants, {})

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Defendant', null, {});

    }
};