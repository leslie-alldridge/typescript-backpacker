import axios from "axios";
import { receiveLogin } from "./login";
import { saveUserToken } from "../../common/utils/auth";
import { actionTypes } from "../../common/constants/actionTypes";

function requestRegister(creds) {
  return {
    type: actionTypes.REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

export function registerError(message) {
  return {
    type: actionTypes.REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message: message.response.data.message
  };
}

export function registerUser(creds) {
  return dispatch => {
    dispatch(requestRegister(creds));
    console.log(creds);

    return axios
      .post("/register", creds)
      .then(response => {
        if (!response) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(registerError("Invalid Credentials"));
          return Promise.reject(response.data);
        } else {
          // If login was successful, set the token in local storage
          const userInfo = saveUserToken(response.data.token);
          // Dispatch the success action
          dispatch(receiveLogin(userInfo));
        }
      })
      .catch(err => {
        console.info(err);

        dispatch(registerError(err));
      });
  };
}
