const division = require("./division");

module.exports = (sequelize, DataTypes) => {
    const Case = sequelize.define("Case", {
        caseNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        caption: {
            type: DataTypes.STRING,

        },
        // division: {
        //     type: DataTypes.INTEGER,

        // },

        Plaintiff: {
            type: DataTypes.INTEGER,

        },
        pAttorney: {
            type: DataTypes.INTEGER,

        },
        Defendant: {
            type: DataTypes.INTEGER,
            allowNull: true,

        },
        dAttorney: {
            type: DataTypes.INTEGER,

        },
        // type: {
        //     type: DataTypes.INTEGER,

        // },
        amntCntrvsy: {
            type: DataTypes.INTEGER
        }
    });


    Case.associate = (db) => {
        Case.belongsToMany(db.Attorney, {
            through: "case_attorney",
            foreignKey: "id"

        });
    };

    Case.associate = (db) => {
        Case.belongsTo(db.Division, {
            foreignKey: "id"
        });
    };

    Case.associate = (db) => {
        Case.belongsToMany(db.Case, {
            through: "case_litigant",
        });
    };

    Case.associate = (db) => {
        Case.belongsTo(db.Type, {
            foreignKey: "id"
        });
    };

    return Case;
};