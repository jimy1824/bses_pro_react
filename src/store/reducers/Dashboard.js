import * as ActionTypes from "../actions/ActionTypes";

import { initalDashboardState } from "./initalStates";

const DashboardReducer = (state = initalDashboardState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_GRAPHS_DASHBOARD:
      return {
        ...state,
        loading: payload.loading,
        data: {
          ...payload.data,
        },
        error: payload.error,
        success: payload.success,
        persons: payload.persons,
        services: payload.services,
      };
    case ActionTypes.UPDATE_REQUEST_HANDLER_DASHBOARD:
      return {
        ...state,
        persons: payload.persons,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
