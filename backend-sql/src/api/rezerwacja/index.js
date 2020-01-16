module.exports = (app) => {
  app.post(`/rezerwacja`, require('./rezerwacjaCreate'));
  app.put(`/rezerwacja/:id`, require('./rezerwacjaUpdate'));
  app.post(`/rezerwacja/import`, require('./rezerwacjaImport'));
  app.delete(`/rezerwacja`, require('./rezerwacjaDestroy'));
  app.get(
    `/rezerwacja/autocomplete`,
    require('./rezerwacjaAutocomplete'),
  );
  app.get(`/rezerwacja`, require('./rezerwacjaList'));
  app.get(`/rezerwacja/:id`, require('./rezerwacjaFind'));
};
