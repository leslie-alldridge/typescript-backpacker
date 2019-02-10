import { actionTypes } from "../common/constants/actionTypes";
import { BagItemEntity } from "../model";

export const bagItemReducer = (state: BagItemEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS_COMPLETED:
      return handleFetchBagsCompleted(state, action.payload);
    case actionTypes.LOGOUT_SUCCESS:
      return handleFetchBagsCompleted(state, []);
  }
  return state;
};

const handleFetchBagsCompleted = (
  state: BagItemEntity[],
  payload: BagItemEntity[]
) => {
  return payload;
};
