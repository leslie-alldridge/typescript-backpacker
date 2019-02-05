import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity, BagEntity } from '../../../model';
import { memberAPI } from '../../../api/member';

const bag = {
  id: 1,
  description: 'testact',
  destination: 'testact',
  username: 'leslie',
}

export const fetchBags = () => (dispatch) => {
  // memberAPI.fetchMemberById(id)
  //   .then((member) => {
      dispatch(fetchMemberByIdCompleted(bag));
    // });
};

const fetchMemberByIdCompleted = (bag: BagEntity) => ({
  type: actionTypes.FETCH_BAGS_COMPLETED,
  payload: bag,
});
