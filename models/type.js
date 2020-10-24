module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define("Type", {
        Field: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });


    Type.associate = (db) => {
        Type.hasOne(db.Case, {
            foreignKey: "type"
        });
    };
    return Type;
};