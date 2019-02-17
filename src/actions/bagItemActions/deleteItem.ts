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

export const deleteItem = (id, bagid, item, user) => dispatch => {
  const data = {
    id,
    bagid,
    item,
    user
  };
  dispatch(requestItems());
  axios.delete(`/api/v1/items/${id}`, { data }).then((data: any) => {
    dispatch(fetchItemsCompleted(data.data.bagItems));
  });
};

const fetchItemsCompleted = (bag: BagItemEntity) => ({
  type: actionTypes.FETCH_ITEMS_COMPLETED,
  isFetching: false,
  isAuthenticated: true,
  payload: bag
});
