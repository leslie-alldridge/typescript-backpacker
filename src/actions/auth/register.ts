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
    payload: message.response.data.errorType
  };
}

export function registerUser(creds) {
  return dispatch => {
    dispatch(requestRegister(creds));
    return axios
      .post("/register", creds)
      .then(response => {
        console.log(response);

        if (!response) {
          dispatch(registerError("Invalid Credentials"));
          return Promise.reject(response.data);
        } else {
          const userInfo = saveUserToken(response.data.token);
          dispatch(receiveLogin(userInfo));
        }
      })
      .catch(err => {
        console.log(err);

        dispatch(registerError(err));
      });
  };
}
