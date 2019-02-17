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

export const showItems = id => dispatch => {
  dispatch(requestItems());
  axios.get(`/api/v1/items/${id}`).then((data: any) => {
    dispatch(fetchItemsCompleted(data.data.bagItems));
  });
};

const fetchItemsCompleted = (bag: BagItemEntity) => ({
  type: actionTypes.FETCH_ITEMS_COMPLETED,
  isFetching: false,
  isAuthenticated: true,
  payload: bag
});
