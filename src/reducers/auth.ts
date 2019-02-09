import { actionTypes } from "../common/constants/actionTypes";
import { AuthEntity } from "../model";

export const authReducer = (state: AuthEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_BAGS_COMPLETED:
      return handleFetchBagsCompleted(state, action.payload);
    case actionTypes.SAVE_BAG:
      return handleFetchBagsCompleted(state, action.payload);
  }
  return state;
};

const handleFetchBagsCompleted = (
  state: AuthEntity[],
  payload: AuthEntity[]
) => {
  return payload;
};
