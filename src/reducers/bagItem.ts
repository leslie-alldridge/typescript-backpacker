import { actionTypes } from '../common/constants/actionTypes';
import { BagItemEntity } from '../model';
import { MemberFieldChangePayload } from '../components/member/actions/memberFieldChange';

const createEmptyMember = (): BagItemEntity => ({
  id: 0,
  archived: false,
  bagid: "",
  bagItem: '',
  username: '',
});

export const bagItemReducer = (state = createEmptyMember(), action) => {
  switch (action.type) {
    case actionTypes.FETCH_BAGS_COMPLETED:
      return handleFetchMemberByIdCompleted(state, action.payload);
    case actionTypes.UPDATE_MEMBER_FIELD:
      return handleUpdateMemberField(state, action.payload);
  }

  return state;
};

const handleFetchMemberByIdCompleted = (state: BagItemEntity = createEmptyMember(), payload: BagItemEntity = createEmptyMember()): BagItemEntity => {
  return payload;
};

const handleUpdateMemberField = (state: BagItemEntity = createEmptyMember(), payload: MemberFieldChangePayload): BagItemEntity => {
  return {
    ...state,
    [payload.fieldValidationResult.key]: payload.value,
  };
};
