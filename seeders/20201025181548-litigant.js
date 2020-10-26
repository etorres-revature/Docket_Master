'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {


        Example: await queryInterface.bulkInsert('Litigants', [{
                // litID: 1,
                litFName: "Loius",
                litLName: "Lane",
                plaintiff: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                // litID: 2,
                litFName: "Clark",
                litLName: "Kent",
                plaintiff: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                // litID: 4,
                litFName: "Peter",
                litLName: "Parker",
                plaintiff: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                // litID: 4,
                litFName: "Tony",
                litLName: "Stark",
                plaintiff: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Litigants', null, {});

    }
};