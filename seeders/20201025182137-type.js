'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Types', [{
                Field: 'Civil',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                Field: 'Criminal',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                Field: 'Divorce',
                createdAt: new Date(),
                updatedAt: new Date()

            },

        ], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Types', null, {});

    }
};