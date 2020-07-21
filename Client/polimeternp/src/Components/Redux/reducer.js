import { combineReducers } from "redux";
import Types from "./types";

const INITIAL_STATE = {
  items: [],
  error: undefined,
};

function fetchDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_POSTS_DATA:
      return Object.assign({}, state, {});
    case Types.FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        items: action.data,
      });
    case Types.FETCH_POSTS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
}

export default combineReducers({
  fetchData: fetchDataReducer,
});
