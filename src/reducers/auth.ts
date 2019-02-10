import { actionTypes } from "../common/constants/actionTypes";
import { AuthEntity } from "../model";

export const authReducer = (state: AuthEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return handleAuthCompleted(state, action.payload);
    // case actionTypes.SAVE_BAG:
    //   return handleAuthCompleted(state, action.payload);
  }
  return state;
};

const handleAuthCompleted = (state: AuthEntity[], payload: AuthEntity[]) => {
  console.log("hit");
  console.log(payload);

  return payload;
};
