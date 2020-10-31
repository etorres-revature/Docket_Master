'use strict';
const faker = require('faker');
const Plaintiffs = [...Array(100)].map((Plaintiffs) => ({
    FName: faker.name.firstName(),
    LName: faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()

}))

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Plaintiffs', Plaintiffs, {})

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Plaintiffs', null, {});

    }
};