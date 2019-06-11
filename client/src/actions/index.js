import axios from 'axios';
import { FETCH_MENU_DATA_REQUEST, FETCH_MENU_DATA_SUCCESS, FETCH_MENU_DATA_FAIL, TOGGLE_SIDEBAR } from './types';

const fetchDataRequest = () => ({
  type: FETCH_MENU_DATA_REQUEST,
  payload: true
});

const fetchDataSuccess = data => ({
  type: FETCH_MENU_DATA_SUCCESS,
  payload: data
});

const fetchDataFail = error => ({
  type: FETCH_MENU_DATA_FAIL,
  payload: error
});

export const fetchMenuData = () => async dispatch => {
  dispatch(fetchDataRequest());
  try {
    const request = await axios.get('/api/data');
    const { data } = request;
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFail(error));
  }
};

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});