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
    return Type;
};