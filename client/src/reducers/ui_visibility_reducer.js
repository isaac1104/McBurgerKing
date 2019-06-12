import { TOGGLE_SIDEBAR } from '../actions/types';

const INITIAL_STATE = {
  sidebar_visible: false,
  modal_visible: false
};

const uiVisibilityReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar_visible: !state.sidebar_visible
      };
    default:
      return state;
  }
}

export default uiVisibilityReducer;