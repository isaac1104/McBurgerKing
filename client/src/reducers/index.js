import { combineReducers } from 'redux';
import allMenusReducer from './all_menus_reducer';
import cartItemsReducer from './cart_items_reducer';
import uiVisibilityReducer from './ui_visibility_reducer';

const rootReducer = combineReducers({
  menus: allMenusReducer,
  cart_items: cartItemsReducer,
  ui_visibility: uiVisibilityReducer
});

export default rootReducer;
