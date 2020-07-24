import Types from "./types";
import axios from "axios";

export default function fetchCandidateData() {
  return async function (dispatch) {
    dispatch({
      type: Types.FETCH_POSTS_DATA,
    });

    const response = await axios("/mock2.json");
    const body = await response;

    if (!response.statusText === "OK") {
      dispatch({
        type: Types.FETCH_POSTS_FAILURE,
        error: body.message,
      });
    } else {
      dispatch({
        type: Types.FETCH_POSTS_SUCCESS,
        data: body.data,
      });
    }
  };
}


