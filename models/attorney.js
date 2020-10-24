module.exports = (sequelize, DataTypes) => {
    const Attorney = sequelize.define("Attorney", {
        attorneyFName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        attorneyLName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        barNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Attorney;
};