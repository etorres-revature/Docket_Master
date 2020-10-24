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
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        division: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        Plaintiff: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        pAttorney: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Defendant: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dAttorney: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        amntCntrvsy: {
            type: DataTypes.INTEGER
        }
    });


    Case.associate = (db) => {
        Case.belongsToMany(db.Attorney, {
            through: "case_profiles",
            foreignKey: "id"

        });
    };

    Case.associate = (db) => {
        Case.belongsTo(db.Division, {
            foreignKey: "id"
        });
    };

    Case.associate = (db) => {
        Case.hasMany(db.Litigant, {
            foreignKey: "litID"
        });
    };

    Case.associate = (db) => {
        Case.belongsTo(db.Type, {
            foreignKey: "id"
        });
    };

    return Case;
};