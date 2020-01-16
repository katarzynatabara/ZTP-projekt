const moment = require('moment');

/**
 * Zwierzak database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const zwierzak = sequelize.define(
    'zwierzak',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      imie: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      typ: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "kot",
          "pies"
        ],
      },
      rasa: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      rozmiar: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "maly",
          "sredni",
          "duzy"
        ],
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  zwierzak.associate = (models) => {
    models.zwierzak.belongsTo(models.user, {
      as: 'wlasciciel',
      constraints: false,
    });

    models.zwierzak.hasMany(models.rezerwacja, {
      as: 'rezerwacja',
      constraints: false,
      foreignKey: 'zwierzakId',
    });



    models.zwierzak.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.zwierzak.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return zwierzak;
};
