import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/rezerwacja/importer/rezerwacjaImporterSelectors';
import RezerwacjaService from 'modules/rezerwacja/rezerwacjaService';
import fields from 'modules/rezerwacja/importer/rezerwacjaImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'REZERWACJA_IMPORTER',
  selectors,
  RezerwacjaService.import,
  fields,
  i18n('entities.rezerwacja.importer.fileName'),
);
