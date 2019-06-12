import { ADD_ITEMS_TO_CART } from '../actions/types';

const INITIAL_STATE = {
  data: []
};

const cartItemsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_ITEMS_TO_CART:
      return {
        ...state,
        data: [ ...state.data, payload ]
      }
    default:
      return state;
  };
};

export default cartItemsReducer;