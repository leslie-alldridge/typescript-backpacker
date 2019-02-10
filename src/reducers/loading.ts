import { actionTypes } from "../common/constants/actionTypes";

export const loadingReducer = (state: [] = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return handleAuthCompleted(state, action.isFetching);
    case actionTypes.LOGIN_SUCCESS:
      return handleAuthCompleted(state, action.isFetching);
    case actionTypes.LOGOUT_SUCCESS:
      return handleAuthCompleted(state, action.isFetching);
  }
  return state;
};

const handleAuthCompleted = (state: [], payload: []) => {
  return payload;
};
