import { actionTypes } from "../../common/constants/actionTypes";
import { BagEntity } from "../../model";
import axios from "axios";

export const saveBag = (user, bag: BagEntity) => dispatch => {
  axios.post("/api/v1/bags", { bag, user }).then((data: any) => {
    dispatch(saveBagCompleted(data.data.bag));
  });
};

const saveBagCompleted = (bag: BagEntity) => ({
  type: actionTypes.SAVE_BAG,
  payload: bag
});
