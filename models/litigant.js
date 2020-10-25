module.exports = (sequelize, DataTypes) => {
    const Litigant = sequelize.define("Litigant", {
        litID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        litFName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        litLName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        plaintiff: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });


    Litigant.associate = (db) => {
        Litigant.belongsTo(db.Case, {
            foreignKey: "caseNumber"
        });
    };
    return Litigant;
};