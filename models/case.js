//creating a Sequelize model for cases table
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define("Case", {
    caseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    caption: {
      type: DataTypes.STRING,
    },
    amntCntrvsy: {
      type: DataTypes.INTEGER,
    },
  });

  //creating Sequelize associations for the Case model
  Case.associate = (db) => {
    Case.belongsTo(db.Division, {});

    Case.belongsTo(db.Plaintiff, {});

    Case.belongsTo(db.Defendant, {});

    Case.belongsTo(db.DefenseAttorney, {});

    Case.belongsTo(db.PlaintiffAttorney, {});

    Case.belongsTo(db.Type, {});
  };

  return Case;
};
