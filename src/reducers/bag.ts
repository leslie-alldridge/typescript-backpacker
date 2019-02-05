import { actionTypes } from '../common/constants/actionTypes';
import { BagEntity } from '../model';

export const bagReducer = (state: BagEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBERS_COMPLETED:
      return handleFetchMembersCompleted(state, action.payload);
  }

  return state;
};

const handleFetchMembersCompleted = (state: BagEntity[], payload: BagEntity[]) => {
  return payload;
};
