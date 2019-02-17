import { actionTypes } from "../../common/constants/actionTypes";
import { BagEntity } from "../../model";

import axios from "axios";
import { get } from "../../common/utils/localstorage";
const token = get("token");
axios.defaults.headers.common = { Authorization: `bearer ${token}` };

function requestBags() {
  return {
    type: actionTypes.FETCH_BAG,
    isFetching: true,
    isAuthenticated: true
  };
}

export const updateBag = (
  id,
  description,
  destination,
  username
) => dispatch => {
  const details = {
    description,
    destination,
    username
  };
  dispatch(requestBags());
  axios.post(`/api/v1/bags/update/${id}`, details).then((data: any) => {
    dispatch(saveBagCompleted(data.data.bag));
  });
};

const saveBagCompleted = (bag: BagEntity) => ({
  type: actionTypes.SAVE_BAG,
  isAuthenticated: true,
  isFetching: false,
  payload: bag
});
