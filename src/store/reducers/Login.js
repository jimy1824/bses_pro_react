import * as ActionTypes from "../actions/ActionTypes";

import { initialLoginState } from "./initalStates";

const loginReducer = (state = initialLoginState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEND_FORGOT_EMAIL_LOGIN:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.RESET_LOGIN:
      return {
        ...state,
        ...initialLoginState,
      };
    case ActionTypes.LOADING_HANDLER_LOGIN:
      return {
        ...state,
        loading: payload.loading,
      };
    case ActionTypes.ERROR_HANDLER_LOGIN:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default loginReducer;
