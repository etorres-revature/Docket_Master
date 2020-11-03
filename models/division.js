//creating a Sequelize model for divisions table
module.exports = (sequelize, DataTypes) => {
  const Division = sequelize.define("Division", {
    division: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    judgeFName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    judgeLName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  //creating Sequelize associations for the divisions table

  Division.associate = (db) => {
    Division.hasMany(db.Case);
  };
  return Division;
};
