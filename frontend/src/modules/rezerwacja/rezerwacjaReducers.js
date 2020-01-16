import list from 'modules/rezerwacja/list/rezerwacjaListReducers';
import form from 'modules/rezerwacja/form/rezerwacjaFormReducers';
import view from 'modules/rezerwacja/view/rezerwacjaViewReducers';
import destroy from 'modules/rezerwacja/destroy/rezerwacjaDestroyReducers';
import importerReducer from 'modules/rezerwacja/importer/rezerwacjaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
