// creating a Sequelize model for the defense_attorneys table
module.exports = (sequelize, DataTypes) => {
  const DefenseAttorney = sequelize.define("DefenseAttorney", {
    def_attorneyFName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    def_attorneyLName: {
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

  //creating Sequelize association for defense_attorneys table
  DefenseAttorney.associate = (db) => {
    DefenseAttorney.hasMany(db.Case, {});
  };
  return DefenseAttorney;
};
