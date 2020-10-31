module.exports = (sequelize, DataTypes) => {
    const Defendant = sequelize.define("Defendant", {

        FName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        LName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        }
    });

    Defendant.associate = (db) => {
        Defendant.hasMany(db.Case, {

        });
    };

    return Defendant;
};