import { actionTypes } from "../common/constants/actionTypes";
import { BagEntity } from "../model";

export const bagReducer = (state: BagEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_BAGS_COMPLETED:
      return handleFetchBagsCompleted(state, action.payload);
    case actionTypes.SAVE_BAG:
      return handleFetchBagsCompleted(state, action.payload);
    case actionTypes.LOGOUT_SUCCESS:
      return handleFetchBagsCompleted(state, []);
  }
  return state;
};

const handleFetchBagsCompleted = (state: BagEntity[], payload: BagEntity[]) => {
  return payload;
};
