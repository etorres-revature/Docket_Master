//creating a Sequelize model for types table
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define("Type", {
    Field: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  //creating Sequelize associations for types table
  Type.associate = (db) => {
    Type.hasMany(db.Case, {});
  };

  return Type;
};
