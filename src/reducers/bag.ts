import { actionTypes } from '../common/constants/actionTypes';
import { BagEntity } from '../model';

export const bagReducer = (state: BagEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_BAGS_COMPLETED:
      return handleFetchBagsCompleted(state, action.payload);
  }

  return state;
};

const handleFetchBagsCompleted = (state: BagEntity[], payload: BagEntity[]) => {
  return payload;
};
