import { FETCH_PAGE } from "../types";
import { getMockPage } from "mocks/staycation";

export const fetchPage = (url, page) => (dispatch) => {
  return getMockPage(url)
    .then((data) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_PAGE,
        payload: error,
      });
    });
};
