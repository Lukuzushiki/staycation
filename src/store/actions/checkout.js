import { CHECKOUT_BOOKING } from "../types";
import { submitMockBooking } from "mocks/staycation";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return submitMockBooking(payload);
};
