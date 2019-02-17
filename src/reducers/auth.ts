import { actionTypes } from "../common/constants/actionTypes";
import { AuthEntity } from "../model";

import { isAuthenticated, getUserTokenInfo } from "../common/utils/auth";

const initialState = [
  {
    isFetching: false,
    isAuthenticated: isAuthenticated(), //this is cool, it checks the initial state to see if you are already authenticated -> if you are then you'll log straight in
    user: getUserTokenInfo(), //required to make sure token is still ok
    errorMessage: ""
  }
];

export const authReducer = (state: AuthEntity[] = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return handleAuthCompleted(initialState, action.payload);
    case actionTypes.LOGOUT_SUCCESS:
      return handleAuthCompleted(initialState, action.payload);
    case actionTypes.LOGIN_FAILURE:
      return handleAuthCompleted(state, action.payload);
  }
  return state;
};

const handleAuthCompleted = (state: AuthEntity[], payload: AuthEntity[]) => {
  return payload;
};
