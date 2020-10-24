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


    Attorney.associate = (db) => {
        Attorney.belongsToMany(db.Case, {
            through: "case_profiles",
            foreignKey: "id"
        });
    };

    return Attorney;
};