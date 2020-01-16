const userFixture = require('./userFixture');
const zwierzakFixture = require('./zwierzakFixture');
const rezerwacjaFixture = require('./rezerwacjaFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  zwierzak: zwierzakFixture,
  rezerwacja: rezerwacjaFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
