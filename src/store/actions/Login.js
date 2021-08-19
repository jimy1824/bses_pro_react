import axios from "axios";

import * as ActionTypes from "./ActionTypes";
import {error} from "../../shared/ui/toast/toast";

export const loadingDispatcherLogin = (loading) => ({
  type: ActionTypes.LOADING_HANDLER_LOGIN,
  payload: {
    loading,
  },
});

export const errorDispatcherLogin = (error) => ({
  type: ActionTypes.ERROR_HANDLER_LOGIN,
  payload: {
    error,
  },
});

export const resetDispatcherLogin = () => ({
  type: ActionTypes.RESET_LOGIN,
});

const sendEmailDispatcherLogin = (data) => ({
  type: ActionTypes.SEND_FORGOT_EMAIL_LOGIN,
  payload: {
    ...data,
  },
});

export const forgotEmail = (values) => async (dispatch) => {
  dispatch(loadingDispatcherLogin(true));
    try {
        axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/password/reset/`,
            values
        ).then(res => {
            console.log(res,'resp')
            dispatch(
                sendEmailDispatcherLogin({
                    loading: false,
                    success: res.data.detail,
                    error: "",
                })
            );
        }).catch(e => {

            for (let [key, value] of Object.entries(e.response.data)) {
                if(Array.isArray(value)){
                    dispatch(
                        sendEmailDispatcherLogin({
                            error: value[0],
                            loading: false,
                            success: "",
                        })
                    );
                    break

                }else {
                    dispatch(
                        sendEmailDispatcherLogin({
                            error: value,
                            loading: false,
                            success: "",
                        })
                    );
                    break

                }
            }});


    } catch (e) {
        dispatch(
            sendEmailDispatcherLogin({
                error: 'someting wet wrong',
                loading: false,
                success: "",
            })
        );

    }




  try {
     axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/password/reset/`,
      values
    ).then(res => {
        console.log(res,'resp')
         dispatch(
             sendEmailDispatcherLogin({
                 loading: false,
                 success: res.data.detail,
                 error: "",
             })
         );
     }).catch(e => {

             for (let [key, value] of Object.entries(e.response.data)) {
                 if(Array.isArray(value)){
                     dispatch(
                         sendEmailDispatcherLogin({
                             error: value[0],
                             loading: false,
                             success: "",
                         })
                     );
                     break

                 }else {
                     dispatch(
                         sendEmailDispatcherLogin({
                             error: value,
                             loading: false,
                             success: "",
                         })
                     );
                     break

                 }
             }});


  } catch (e) {
      dispatch(
          sendEmailDispatcherLogin({
              error: 'someting wet wrong',
              loading: false,
              success: "",
          })
      );

  }
};

export const confirmPassword = (values) => async (dispatch) => {
  dispatch(loadingDispatcherLogin(true));

    try {
        axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/password/reset/confirm/${values.uid}/${values.token}/`,
            values
        ).then(res => {
            console.log(res,'resp')
            dispatch(
                sendEmailDispatcherLogin({
                    loading: false,
                    success: res.data.detail,
                    error: "",
                })
            );
        }).catch(e => {

            for (let [key, value] of Object.entries(e.response.data)) {
                if(Array.isArray(value)){
                    dispatch(
                        sendEmailDispatcherLogin({
                            error: key+' '+value[0],
                            loading: false,
                            success: "",
                        })
                    );
                    break

                }else {
                    dispatch(
                        sendEmailDispatcherLogin({
                            error: key+' '+value,
                            loading: false,
                            success: "",
                        })
                    );
                    break

                }
            }});


    } catch (e) {
        dispatch(
            sendEmailDispatcherLogin({
                error: 'someting wet wrong',
                loading: false,
                success: "",
            })
        );

    }
};
