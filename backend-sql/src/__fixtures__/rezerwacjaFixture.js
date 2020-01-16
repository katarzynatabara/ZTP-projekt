const genericFixture = require('./genericFixture');
const RezerwacjaRepository = require('../database/repositories/rezerwacjaRepository');

const rezerwacjaFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new RezerwacjaRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = rezerwacjaFixture;
