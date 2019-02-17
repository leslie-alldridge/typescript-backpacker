import { actionTypes } from "../../common/constants/actionTypes";
import { BagItemEntity } from "../../model";

import axios from "axios";
import { get } from "../../common/utils/localstorage";
const token = get("token");
axios.defaults.headers.common = { Authorization: `bearer ${token}` };

function requestItems() {
  return {
    type: actionTypes.FETCH_ITEMS,
    isFetching: true,
    isAuthenticated: true
  };
}

export const archiveItem = (id, item, user) => dispatch => {
  dispatch(requestItems());
  axios
    .post(`/api/v1/items/archive/${id}`, { item, user })
    .then((data: any) => {
      dispatch(fetchItemsCompleted(data.data.bagItems));
    });
};

const fetchItemsCompleted = (bag: BagItemEntity) => ({
  type: actionTypes.FETCH_ITEMS_COMPLETED,
  isAuthenticated: true,
  isFetching: false,
  payload: bag
});
