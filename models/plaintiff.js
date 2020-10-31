module.exports = (sequelize, DataTypes) => {
    const Plaintiff = sequelize.define("Plaintiff", {

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


    Plaintiff.associate = (db) => {
        Plaintiff.hasMany(db.Case, {

        });

    };

    return Plaintiff;
};