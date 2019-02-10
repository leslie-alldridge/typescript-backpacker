import { actionTypes } from "../../common/constants/actionTypes";
import { BagEntity } from "../../model";
import axios from "axios";

function requestBags() {
  return {
    type: actionTypes.FETCH_BAG,
    isFetching: true,
    isAuthenticated: true
  };
}

export const saveBag = (user, bag: BagEntity) => dispatch => {
  dispatch(requestBags());
  axios.post("/api/v1/bags", { bag, user }).then((data: any) => {
    dispatch(saveBagCompleted(data.data.bag));
  });
};

const saveBagCompleted = (bag: BagEntity) => ({
  type: actionTypes.SAVE_BAG,
  isAuthenticated: true,
  isFetching: false,
  payload: bag
});
