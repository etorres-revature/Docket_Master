//creating a Sequelize model for plaintiffs table
module.exports = (sequelize, DataTypes) => {
  const Plaintiff = sequelize.define("Plaintiff", {
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

  //creating Sequelize associations for plaintiffs table
  Plaintiff.associate = (db) => {
    Plaintiff.hasMany(db.Case, {});
  };

  return Plaintiff;
};
