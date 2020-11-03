//creating a Sequelize model for plaintiff_attorneys table
module.exports = (sequelize, DataTypes) => {
  const PlaintiffAttorney = sequelize.define("PlaintiffAttorney", {
    FName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    LName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    barNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  //creating Sequelize associations for plaintiff_attorneys table
  PlaintiffAttorney.associate = (db) => {
    PlaintiffAttorney.hasMany(db.Case, {});
  };
  return PlaintiffAttorney;
};
