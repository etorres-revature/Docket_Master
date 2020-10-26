'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Divisions', [{
                division: '353rd District Court',
                judgeFname: "John",
                judgeLname: "Doe",
                roomNumber: 500,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                division: '134th District Court',
                judgeFname: "Jane",
                judgeLname: "Doe",
                roomNumber: 500,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Division', null, {});

    }
};