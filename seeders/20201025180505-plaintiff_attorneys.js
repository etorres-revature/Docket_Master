'use strict';
const faker = require('faker');
const PlaintiffAttorney = [...Array(100)].map((PPlaintiffAttorney) => ({
    FName: faker.name.firstName(),
    LName: faker.name.lastName(),
    barNumber: faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date()

}))


module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('PlaintiffAttorneys', PlaintiffAttorney, {})

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('PlaintiffAttorney', null, {});

    }
};