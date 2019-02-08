import { actionTypes } from '../common/constants/actionTypes';
import { BagItemEntity } from '../model';

const createEmptyItem = (): BagItemEntity => ({
  id: 0,
  archived: false,
  bagid: "",
  bagItem: '',
  username: '',
});

export const bagItemReducer = (state = createEmptyItem(), action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS_COMPLETED:
      return handleFetchItemsCompleted(state, action.payload);
    // case actionTypes.UPDATE_MEMBER_FIELD:
    //   return handleUpdateMemberField(state, action.payload);
  }

  return state;
};

const handleFetchItemsCompleted = (state: BagItemEntity = createEmptyItem(), payload: BagItemEntity = createEmptyItem()): BagItemEntity => {
  return payload;
};

// const handleUpdateMemberField = (state: BagItemEntity = createEmptyMember(), payload: MemberFieldChangePayload): BagItemEntity => {
//   return {
//     ...state,
//     [payload.fieldValidationResult.key]: payload.value,
//   };
// };
