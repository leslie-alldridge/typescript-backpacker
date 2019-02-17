import { actionTypes } from "../common/constants/actionTypes";

export const loadingReducer = (state: false = false, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT_REQUEST:
    case actionTypes.FETCH_BAG:
    case actionTypes.REGISTER_REQUEST:
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.LOGIN_SUCCESS:

    case actionTypes.FETCH_BAGS_COMPLETED:
    case actionTypes.FETCH_ITEMS_COMPLETED:
    case actionTypes.SAVE_BAG:
    case actionTypes.LOGOUT_SUCCESS:
      console.log(action.isFetching);

      return handleAuthCompleted(state, action.isFetching);
  }
  return state;
};

const handleAuthCompleted = (state: false, payload: boolean) => {
  return payload;
};
