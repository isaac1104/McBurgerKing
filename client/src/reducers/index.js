import { combineReducers } from 'redux';
import menuReducer from './menu_reducer';
import uiVisibilityReducer from './ui_visibility_reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  ui_visibility: uiVisibilityReducer
});

export default rootReducer;
