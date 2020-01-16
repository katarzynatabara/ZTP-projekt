import list from 'modules/zwierzak/list/zwierzakListReducers';
import form from 'modules/zwierzak/form/zwierzakFormReducers';
import view from 'modules/zwierzak/view/zwierzakViewReducers';
import destroy from 'modules/zwierzak/destroy/zwierzakDestroyReducers';
import importerReducer from 'modules/zwierzak/importer/zwierzakImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
