import { actionsDefs } from "../const";
import { MemberEntity } from "../api/model";

export const fetchMemberListCompleted = (memberList: MemberEntity[]) => ({
  type: actionsDefs.GET_BAGS,
  payload: memberList
});
