module.exports = (sequelize, DataTypes) => {
    const Litigant = sequelize.define("Litigant", {
        LitID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        LitFName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        LitLName: {
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
    return Litigant;
};