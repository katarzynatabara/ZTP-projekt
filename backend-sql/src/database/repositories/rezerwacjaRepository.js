const models = require('../models');
const SequelizeRepository = require('./sequelizeRepository');
const AuditLogRepository = require('./auditLogRepository');
const FileRepository = require('./fileRepository');
const lodash = require('lodash');
const SequelizeFilterUtils = require('../utils/sequelizeFilterUtils');

const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

/**
 * Handles database operations for the Rezerwacja.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class RezerwacjaRepository {
  /**
   * Creates the Rezerwacja.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await models.rezerwacja.create(
      {
        ...lodash.pick(data, [
          'id',
          'przyjazd',
          'wyjazd',
          'uwagiKlienta',
          'uwagiPracownika',
          'status',
          'anulowanieUwagi',
          'oplata',
          'importHash',
          'updatedAt',
          'createdAt',
        ]),
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setWlasciciel(data.wlasciciel || null, {
      transaction,
    });
    await record.setZwierzak(data.zwierzak || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: models.rezerwacja.getTableName(),
        belongsToColumn: 'zdjecia',
        belongsToId: record.id,
      },
      data.zdjecia,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: models.rezerwacja.getTableName(),
        belongsToColumn: 'rachunek',
        belongsToId: record.id,
      },
      data.rachunek,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the Rezerwacja.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.rezerwacja.findByPk(id, {
      transaction,
    });

    record = await record.update(
      {
        ...lodash.pick(data, [
          'id',
          'przyjazd',
          'wyjazd',
          'uwagiKlienta',
          'uwagiPracownika',
          'status',
          'anulowanieUwagi',
          'oplata',
          'importHash',
          'updatedAt',
          'createdAt',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );


    await record.setWlasciciel(data.wlasciciel || null, {
      transaction,
    });
    await record.setZwierzak(data.zwierzak || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: models.rezerwacja.getTableName(),
        belongsToColumn: 'zdjecia',
        belongsToId: record.id,
      },
      data.zdjecia,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: models.rezerwacja.getTableName(),
        belongsToColumn: 'rachunek',
        belongsToId: record.id,
      },
      data.rachunek,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Deletes the Rezerwacja.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.rezerwacja.findByPk(id, {
      transaction,
    });

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      null,
      options,
    );
  }

  /**
   * Finds the Rezerwacja and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: models.user,
        as: 'wlasciciel',
      },
      {
        model: models.zwierzak,
        as: 'zwierzak',
      },
    ];

    const record = await models.rezerwacja.findByPk(id, {
      include,
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of Rezerwacjas based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    return models.rezerwacja.count(
      {
        where: filter,
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the Rezerwacjas based on the query.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   * @param {Object} [options]
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    let where = {};
    let include = [
      {
        model: models.user,
        as: 'wlasciciel',
      },
      {
        model: models.zwierzak,
        as: 'zwierzak',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        };
      }

      if (filter.wlasciciel) {
        where = {
          ...where,
          ['wlascicielId']: SequelizeFilterUtils.uuid(
            filter.wlasciciel,
          ),
        };
      }

      if (filter.zwierzak) {
        where = {
          ...where,
          ['zwierzakId']: SequelizeFilterUtils.uuid(
            filter.zwierzak,
          ),
        };
      }

      if (filter.przyjazdRange) {
        const [start, end] = filter.przyjazdRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            przyjazd: {
              ...where.przyjazd,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            przyjazd: {
              ...where.przyjazd,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.wyjazdRange) {
        const [start, end] = filter.wyjazdRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            wyjazd: {
              ...where.wyjazd,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            wyjazd: {
              ...where.wyjazd,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.status) {
        where = {
          ...where,
          status: filter.status,
        };
      }

      if (filter.oplataRange) {
        const [start, end] = filter.oplataRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            oplata: {
              ...where.oplata,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            oplata: {
              ...where.oplata,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let {
      rows,
      count,
    } = await models.rezerwacja.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  /**
   * Lists the Rezerwacjas to populate the autocomplete.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {string} query
   * @param {number} limit
   */
  async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },

        ],
      };
    }

    const records = await models.rezerwacja.findAll({
      attributes: ['id', 'id'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['id', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} record - The sequelize record
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  async _createAuditLog(action, record, data, options) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),
        zdjecia: data.zdjecia,
        rachunek: data.rachunek,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'rezerwacja',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of Rezerwacja with relations and files.
   *
   * @param {Array} rows
   * @param {Object} [options]
   */
  async _fillWithRelationsAndFilesForRows(rows, options) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  /**
   * Fill the Rezerwacja with the relations and files.
   *
   * @param {Object} record
   * @param {Object} [options]
   */
  async _fillWithRelationsAndFiles(record, options) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    output.zdjecia = await record.getZdjecia({
      transaction,
    });
    output.rachunek = await record.getRachunek({
      transaction,
    });

    return output;
  }
}

module.exports = RezerwacjaRepository;
