import { FETCH_MENUS_DATA_REQUEST, FETCH_MENUS_DATA_SUCCESS, FETCH_MENUS_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {
  is_fetching: false,
  data: '',
  errorMsg: ''
};

const menuReducer = (state = INITIAL_STATE, { type, payload }) => {
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
    default:
      return state;
  }
};

export default menuReducer;