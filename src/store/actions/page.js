import { FETCH_PAGE } from "../types";
import axios from "axios";

export const fetchPage = (url, page) => (dispatch) => {
  const headers = { "Access-Control-Allow-Origin": "*" };
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
        },
      });
    })
    .catch((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: response.error,
      });
    });
};
