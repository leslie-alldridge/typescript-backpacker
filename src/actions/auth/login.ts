import { saveUserToken } from "../../common/utils/auth";
import axios from "axios";
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
    message
  };
}

// function fetchBag(user) {
//   return function(dispatch) {
//     dispatch(requestBag());
//     axios
//       .get("/bags")
//       .then(res => {
//         dispatch(receiveBag(res.data.bag, user));
//       })
//       .catch(err => dispatch(loginError(err.message)));
//   };
// }

// function requestBag() {
//   return {
//     type: actionTypes.FETCH_BAGS_COMPLETED,
//     isFetching: true,
//     isAuthenticated: true
//   };
// }

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin());

    return axios
      .post("/signin", creds)
      .then(response => {
        if (!response.data) {
          // If there was a problem, we want to
          // dispatch the error condition
          console.log(response.data.message);

          dispatch(loginError(response.data.message));
          return Promise.reject(response.data.message);
        } else {
          console.log("success");
          console.log(response.data.token);

          // If login was successful, set the token in local storage
          const userInfo = saveUserToken(response.data.token);
          // Dispatch the success action
          console.log(userInfo);

          dispatch(receiveLogin(userInfo));
        }
      })
      .catch(err => console.log(err));
  };
}
