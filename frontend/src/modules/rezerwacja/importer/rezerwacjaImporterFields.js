import model from 'modules/rezerwacja/rezerwacjaModel';

const { fields } = model;

export default [
  fields.wlasciciel,
  fields.zwierzak,
  fields.przyjazd,
  fields.wyjazd,
  fields.uwagiKlienta,
  fields.uwagiPracownika,
  fields.zdjecia,
  fields.status,
  fields.anulowanieUwagi,
  fields.oplata,
  fields.rachunek,
];
