import axios from 'axios';
import { 
  FETCH_MENUS_DATA_REQUEST, 
  FETCH_MENUS_DATA_SUCCESS, 
  FETCH_MENUS_DATA_FAIL, 
  TOGGLE_SIDEBAR, 
  ADD_ITEMS_TO_CART 
} from './types';

const fetchDataRequest = ({ type, payload }) => ({
  type,
  payload
});

const fetchDataSuccess = ({ type, payload }) => ({
  type,
  payload
});

const fetchDataFail = ({ type, payload }) => ({
  type,
  payload
});

export const fetchMenusData = () => async dispatch => {
  dispatch(fetchDataRequest({ type: FETCH_MENUS_DATA_REQUEST, payload: true }));
  try {
    const request = await axios.get('/api/data');
    const { data } = request;
    dispatch(fetchDataSuccess({ type: FETCH_MENUS_DATA_SUCCESS, payload: data }));
  } catch (error) {
    dispatch(fetchDataFail({ type: FETCH_MENUS_DATA_FAIL, payload: error }));
  }
};

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const addItemsToCart = item => ({
  type: ADD_ITEMS_TO_CART,
  payload: item
});