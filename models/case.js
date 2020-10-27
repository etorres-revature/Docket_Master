const division = require("./division");

module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define(
    "Case",
    {
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
      // division: {
      //     type: DataTypes.INTEGER,

      // },

      Plaintiff: {
        type: DataTypes.INTEGER,
      },
      pAttorney: {
        type: DataTypes.INTEGER,
      },
      Defendant: {
        type: DataTypes.INTEGER,
      },
      dAttorney: {
        type: DataTypes.INTEGER,
      },
      // type: {
      //     type: DataTypes.INTEGER,

      // },
      amntCntrvsy: {
        type: DataTypes.INTEGER,
      },
    },
    {
      indexes: [
        {
          name: "cases_attorney_index1",
          fields: ["pAttorney"],
        },
        {
          name: "cases_attorney_index2",
          fields: ["dAttorney"],
        },
        {
          name: "case_litigant_index1",
          fields: ["Plaintiff"],
        },
        {
          name: "cases_litigant_index2",
          fields: ["Defendant"],
        },
      ],
    }
  );

  Case.associate = (db) => {
    Case.belongsToMany(db.Attorney, {
      as: "Attorneyp",
      through: "case_plaintiff_attorney",
      sourceKey: "pAttorney",
      targetKey: "id",
      foreignKey: "CaseId",
      otherKey: "AttorneyId",
    });

    Case.belongsToMany(db.Attorney, {
      as: "Attorneyd",
      through: "case_defense_attorney",
      sourceKey: "dAttorney",
      targetKey: "id",
      foreignKey: "CaseId",
      otherKey: "AttorneyId",
    });

    Case.belongsTo(db.Division, {
      foreignKey: "DivisionId",
    });

    Case.belongsToMany(db.Litigant, {
      as: "plaint",
      through: "case_litigant_plaintiff",
      sourceKey: "Plaintiff",
      foreignKey: "CaseId",
      targetKey: "id",
    });

    Case.belongsToMany(db.Litigant, {
      as: "def",
      through: "case_litigant_plaintiff",
      sourceKey: "Defendant",
      foreignKey: "CaseId",
      targetKey: "id",
    });

    Case.belongsTo(db.Type, {
      foreignKey: "id",
    });
  };

  return Case;
};
