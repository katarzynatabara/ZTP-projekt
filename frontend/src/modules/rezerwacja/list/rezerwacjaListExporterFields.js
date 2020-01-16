import model from 'modules/rezerwacja/rezerwacjaModel';

const { fields } = model;

export default [
  fields.id,
  fields.wlasciciel,
  fields.zwierzak,
  fields.przyjazd,
  fields.wyjazd,
  fields.uwagiKlienta,
  fields.uwagiPracownika,
  fields.status,
  fields.anulowanieUwagi,
  fields.oplata,
  fields.rachunek,
  fields.createdAt,
  fields.updatedAt
];
