import { combineReducers } from 'redux';
import allMenusReducer from './all_menus_reducer';
import uiVisibilityReducer from './ui_visibility_reducer';

const rootReducer = combineReducers({
  menus: allMenusReducer,
  ui_visibility: uiVisibilityReducer
});

export default rootReducer;
