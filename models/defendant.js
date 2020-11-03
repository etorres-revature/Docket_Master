//creating Sequelize model for defendants table
module.exports = (sequelize, DataTypes) => {
  const Defendant = sequelize.define("Defendant", {
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
  });

  //creating associations for defendants table
  Defendant.associate = (db) => {
    Defendant.hasMany(db.Case, {});
  };

  return Defendant;
};
