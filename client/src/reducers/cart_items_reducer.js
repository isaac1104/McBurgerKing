import { ADD_ITEMS_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/types';

const INITIAL_STATE = {
  data: []
};

const cartItemsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_ITEMS_TO_CART:
      const { name, price, img, quantity } = payload;
      const duplicateItem = state.data.find(item => item.name === name);
      if (duplicateItem) {
        return {
          ...state,
          data: state.data.map(item => duplicateItem.name === item.name ? { ...item, quantity: item.quantity + 1 } : item)
        };
      } else {
        return {
          ...state,
          data: [...state.data, { name, price, img, quantity }]
        };
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        data: state.data.filter(({ name }) => name !== payload)
      };
    default:
      return state;
  };
};

export default cartItemsReducer;