import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/zwierzak/importer/zwierzakImporterSelectors';
import ZwierzakService from 'modules/zwierzak/zwierzakService';
import fields from 'modules/zwierzak/importer/zwierzakImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'ZWIERZAK_IMPORTER',
  selectors,
  ZwierzakService.import,
  fields,
  i18n('entities.zwierzak.importer.fileName'),
);
