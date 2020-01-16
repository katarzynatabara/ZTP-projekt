import model from 'modules/zwierzak/zwierzakModel';

const { fields } = model;

export default [
  fields.id,
  fields.wlasciciel,
  fields.imie,
  fields.typ,
  fields.rasa,
  fields.rozmiar,
  fields.createdAt,
  fields.updatedAt
];
