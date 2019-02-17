import { saveUserToken } from "../../common/utils/auth";

import axios from "axios";
import { get } from "../../common/utils/localstorage";
const token = get("token");
axios.defaults.headers.common = { Authorization: `bearer ${token}` };

import { actionTypes } from "../../common/constants/actionTypes";

function requestLogin() {
  return {
    type: actionTypes.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  };
}

export function receiveLogin(user) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    payload: user
  };
}

export function receiveBag(bag, user) {
  return {
    type: actionTypes.FETCH_BAGS_COMPLETED,
    isFetching: false,
    response: bag
  };
}

function loginError(message) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    payload: message.response.data.errorType
  };
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(requestLogin());
    return axios
      .post("/signin", creds)
      .then(response => {
        if (!response.data) {
          dispatch(loginError(response.data.message));
          return Promise.reject(response.data.message);
        } else {
          const userInfo = saveUserToken(response.data.token);
          dispatch(receiveLogin(userInfo));
        }
      })
      .catch(err => dispatch(loginError(err)));
  };
}
