import { FETCH_MENUS_DATA_REQUEST, FETCH_MENUS_DATA_SUCCESS, FETCH_MENUS_DATA_FAIL, FILTER_MENU_TYPES } from '../actions/types';

const INITIAL_STATE = {
  is_fetching: false,
  data: '',
  filteredData: '',
  errorMsg: ''
};

const allMenusReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_MENUS_DATA_REQUEST:
      return {
        ...state,
        is_fetching: payload
      };
    case FETCH_MENUS_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        data: payload,
        errorMsg: ''
      };
    case FETCH_MENUS_DATA_FAIL:
      return {
        ...state,
        is_fetching: false,
        data: '',
        errorMsg: payload
      };
    case FILTER_MENU_TYPES:
      return {
        ...state,
        filteredData: payload === 'all' ? state.data : state.data.filter(({ type }) => type === payload)
      };
    default:
      return state;
  }
};

export default allMenusReducer;