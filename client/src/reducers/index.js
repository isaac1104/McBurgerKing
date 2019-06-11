import { combineReducers } from 'redux';
import menuReducer from './menu_reducer';

const rootReducer = combineReducers({
  menu: menuReducer
});

export default rootReducer;
