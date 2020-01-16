const moment = require('moment');

/**
 * Rezerwacja database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const rezerwacja = sequelize.define(
    'rezerwacja',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      przyjazd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      wyjazd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      uwagiKlienta: {
        type: DataTypes.TEXT,
        validate: {

        }
      },
      uwagiPracownika: {
        type: DataTypes.TEXT,
        validate: {

        }
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "zarezerwowany",
          "weryfikacja",
          "anulowany",
          "zakonczony"
        ],
      },
      anulowanieUwagi: {
        type: DataTypes.TEXT,
        validate: {

        }
      },
      oplata: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
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

  rezerwacja.associate = (models) => {
    models.rezerwacja.belongsTo(models.user, {
      as: 'wlasciciel',
      constraints: false,
    });

    models.rezerwacja.belongsTo(models.zwierzak, {
      as: 'zwierzak',
      constraints: false,
    });

    models.rezerwacja.hasMany(models.file, {
      as: 'zdjecia',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.rezerwacja.getTableName(),
        belongsToColumn: 'zdjecia',
      },
    });

    models.rezerwacja.hasMany(models.file, {
      as: 'rachunek',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.rezerwacja.getTableName(),
        belongsToColumn: 'rachunek',
      },
    });

    models.rezerwacja.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.rezerwacja.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return rezerwacja;
};
