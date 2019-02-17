import { removeUser } from "../../common/utils/auth";
import { actionTypes } from "../../common/constants/actionTypes";

function requestLogout() {
  return {
    type: actionTypes.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}
const initialState = [
  {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ""
  }
];
function receiveLogout() {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    payload: initialState
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    removeUser();
    dispatch(receiveLogout());
  };
}
