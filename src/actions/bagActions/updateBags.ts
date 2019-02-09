import { actionTypes } from "../../common/constants/actionTypes";
import { BagEntity } from "../../model";
import axios from "axios";

export const updateBag = (id, description, destination) => dispatch => {
  const details = {
    description,
    destination
  };
  axios.post(`/api/v1/bags/update/${id}`, details).then((data: any) => {
    dispatch(saveBagCompleted(data.data.bag));
  });
};

const saveBagCompleted = (bag: BagEntity) => ({
  type: actionTypes.SAVE_BAG,
  payload: bag
});
