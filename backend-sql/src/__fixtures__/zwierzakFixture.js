const genericFixture = require('./genericFixture');
const ZwierzakRepository = require('../database/repositories/zwierzakRepository');

const zwierzakFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ZwierzakRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = zwierzakFixture;
