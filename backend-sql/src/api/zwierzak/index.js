module.exports = (app) => {
  app.post(`/zwierzak`, require('./zwierzakCreate'));
  app.put(`/zwierzak/:id`, require('./zwierzakUpdate'));
  app.post(`/zwierzak/import`, require('./zwierzakImport'));
  app.delete(`/zwierzak`, require('./zwierzakDestroy'));
  app.get(
    `/zwierzak/autocomplete`,
    require('./zwierzakAutocomplete'),
  );
  app.get(`/zwierzak`, require('./zwierzakList'));
  app.get(`/zwierzak/:id`, require('./zwierzakFind'));
};
