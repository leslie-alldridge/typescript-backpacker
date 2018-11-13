import { actionsDefs } from '../const';
//import { MemberEntity } from '../api/model';

export const fetchMemberListRequestStart = (memberList: any) => ({
  type: actionsDefs.GET_BAGS,
  payload: memberList
});
