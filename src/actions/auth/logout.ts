import { removeUser } from "../../common/utils/auth";
import { actionTypes } from "../../common/constants/actionTypes";

function requestLogout() {
  return {
    type: actionTypes.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  const emptyAuth = {
    id: 0,
    username: "",
    iat: 0,
    exp: 0
  };
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    payload: emptyAuth
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    removeUser();
    dispatch(receiveLogout());
  };
}
