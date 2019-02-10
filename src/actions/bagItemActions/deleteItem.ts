import { actionTypes } from "../../common/constants/actionTypes";
import { BagItemEntity } from "../../model";
import axios from "axios";

function requestItems() {
  return {
    type: actionTypes.FETCH_ITEMS,
    isFetching: true,
    isAuthenticated: true
  };
}

export const deleteItem = (id, bagid, item) => dispatch => {
  const data = {
    id,
    bagid,
    item
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
