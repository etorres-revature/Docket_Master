module.exports = (sequelize, DataTypes) => {
    const Division = sequelize.define("Division", {
        divisionID: {
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
        judgeFName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        judgeLName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        roomNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });



    Division.associate = (db) => {
        Division.hasOne(db.Case, {
            foreignKey: "division"
        });
    };
    return Division;
};