const division = require("./division");

module.exports = (sequelize, DataTypes) => {
    const Case = sequelize.define(
        "Case", {
            caseNumber: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                },
            },
            caption: {
                type: DataTypes.STRING,
            },


            // Plaintiff: {
            //     type: DataTypes.INTEGER,
            // },
            // pAttorney: {
            //     type: DataTypes.INTEGER,
            // },
            // Defendant: {
            //     type: DataTypes.INTEGER,
            // },
            // dAttorney: {
            //     type: DataTypes.INTEGER,
            // },

            amntCntrvsy: {
                type: DataTypes.INTEGER,
            },
        });


    Case.associate = (db) => {
        Case.belongsTo(db.Division, {
            foreignKey: "DivisionId",
        });

        Case.belongsTo(db.Plaintiff, {
            // foreignKey: "PlaintiffId",
        });

        Case.belongsTo(db.Defendant, {
            // foreignKey: "DefendantId",
        });

        Case.belongsTo(db.DefenseAttorney, {
            // foreignKey: "Defense_attorneyId",
        });

        Case.belongsTo(db.PlaintiffAttorney, {
            // foreignKey: "Plaintiff_attorneyId",
        });

        Case.belongsTo(db.Type, {
            foreignKey: "TypeId",
        });
    };

    return Case;
};