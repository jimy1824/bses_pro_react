import axios from "axios";

import * as ActionTypes from "./ActionTypes";

export const handleLoadingDispatcher = (loading) => ({
  type: ActionTypes.LOADING_HANDLER_DASHBOARD,
  payload: {
    loading,
  },
});

const graphFetchDispatcher = (data) => ({
  type: ActionTypes.FETCH_GRAPHS_DASHBOARD,
  payload: {
    ...data,
  },
});

export const handleSuccessDispatcher = (success) => ({
  type: ActionTypes.SUCCESS_HANDLER_DASHBOARD,
  payload: {
    success,
  },
});

export const handleErrorDispatcher = (error) => ({
  type: ActionTypes.ERROR_HANDLER_DASHBOARD,
  payload: {
    error,
  },
});

export const fetchGraphs = (token) => async (dispatch) => {
  dispatch(handleLoadingDispatcher(true));
  dispatch(handleSuccessDispatcher(false));
  try {
    const graphResponse = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/request/get_statistics/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const personResponse = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/request/search_request/`,
      {
        first_name: "",
        last_name: "",
        middle_name: "",
        address: "",
        phone_on_cell: "",
        phone_on_work: "",
        phone_on_home: "",
        mailing_address: "",
        mailing_address_village: "",
        mailing_address_state: "",
        mailing_address_zip: "",
        verification_type: "",
        request_status: "",
        dob: null,
        request_from: null,
        request_to: null,
        person: "",
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    const servicesResponse = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/service_request/?type=Requested`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    dispatch(
      graphFetchDispatcher({
        loading: false,
        data: graphResponse.data,
        error: "",
        success: true,
        persons: personResponse.data,
        services: servicesResponse.data,
      })
    );
  } catch (e) {
    dispatch(handleErrorDispatcher(e.response.data.message));
    dispatch(handleLoadingDispatcher(false));
  }
};

