import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import FilesField from 'modules/shared/fields/filesField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.rezerwacja.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.rezerwacja.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  wlasciciel: new RelationToOneField('wlasciciel', label('wlasciciel'), {
    "required": true
  }),
  zwierzak: new RelationToOneField('zwierzak', label('zwierzak'), {
    "required": true
  }),
  przyjazd: new DateTimeField('przyjazd', label('przyjazd'), {
    "required": true
  }),
  wyjazd: new DateTimeField('wyjazd', label('wyjazd'), {
    "required": true
  }),
  uwagiKlienta: new StringField('uwagiKlienta', label('uwagiKlienta'), {
    "max": 20000
  }),
  uwagiPracownika: new StringField('uwagiPracownika', label('uwagiPracownika'), {
    "max": 20000
  }),
  zdjecia: new ImagesField('zdjecia', label('zdjecia'), 'rezerwacja/zdjecia',{
    "size": 3000000
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'zarezerwowany', label: enumeratorLabel('status', 'zarezerwowany') },
    { id: 'weryfikacja', label: enumeratorLabel('status', 'weryfikacja') },
    { id: 'anulowany', label: enumeratorLabel('status', 'anulowany') },
    { id: 'zakonczony', label: enumeratorLabel('status', 'zakonczony') },
  ],{
    "required": true
  }),
  anulowanieUwagi: new StringField('anulowanieUwagi', label('anulowanieUwagi'), {
    "max": 20000
  }),
  oplata: new DecimalField('oplata', label('oplata'), {
    "scale": 2
  }),
  rachunek: new FilesField('rachunek', label('rachunek'), 'rezerwacja/rachunek',{
    "size": 3000000
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  przyjazdRange: new DateTimeRangeField(
    'przyjazdRange',
    label('przyjazdRange'),
  ),
  wyjazdRange: new DateTimeRangeField(
    'wyjazdRange',
    label('wyjazdRange'),
  ),
  oplataRange: new DecimalRangeField(
    'oplataRange',
    label('oplataRange'),
  ),
};

export default {
  fields,
};
