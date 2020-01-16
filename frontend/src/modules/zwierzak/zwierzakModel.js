import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';

function label(name) {
  return i18n(`entities.zwierzak.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.zwierzak.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  wlasciciel: new RelationToOneField('wlasciciel', label('wlasciciel'), {
    "required": true
  }),
  imie: new StringField('imie', label('imie'), {
    "required": true,
    "max": 255
  }),
  typ: new EnumeratorField('typ', label('typ'), [
    { id: 'kot', label: enumeratorLabel('typ', 'kot') },
    { id: 'pies', label: enumeratorLabel('typ', 'pies') },
  ],{
    "required": true
  }),
  rasa: new StringField('rasa', label('rasa'), {
    "required": true,
    "max": 255
  }),
  rozmiar: new EnumeratorField('rozmiar', label('rozmiar'), [
    { id: 'maly', label: enumeratorLabel('rozmiar', 'maly') },
    { id: 'sredni', label: enumeratorLabel('rozmiar', 'sredni') },
    { id: 'duzy', label: enumeratorLabel('rozmiar', 'duzy') },
  ],{
    "required": true
  }),
  rezerwacja: new RelationToManyField('rezerwacja', label('rezerwacja'), {}),
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

};

export default {
  fields,
};
