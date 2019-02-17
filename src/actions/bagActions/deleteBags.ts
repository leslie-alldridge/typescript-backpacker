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

export const deleteBags = (id, user) => dispatch => {
  dispatch(requestBags());
  axios
    .delete(`/api/v1/bags/${id}`, {
      params: {
        username: user
      }
    })
    .then((data: any) => {
      dispatch(fetchBagsCompleted(data.data.bag));
    });
};

const fetchBagsCompleted = (bag: BagEntity) => ({
  type: actionTypes.FETCH_BAGS_COMPLETED,
  isFetching: false,
  payload: bag
});
