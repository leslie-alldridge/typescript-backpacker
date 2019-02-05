import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
// import { memberAPI } from '../../../api/member';

export const saveBagToDB = (user:any, description:string, destination:string) => (dispatch) => {
  // memberAPI.fetchMembers()
  //   .then((bags) => {
  //     dispatch(fetchMembersCompleted(bags));
  //   });
};

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});

export const fetchMembersAction = () => (dispatch) => {
  // memberAPI.fetchMembers()
  //   .then((members) => {
  //     dispatch(fetchMembersCompleted(members));
  //   });
};