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

export const archiveItem = (id, item) => dispatch => {
  dispatch(requestItems());
  axios
    .post(`/api/v1/items/archive/${id}`, { item: item })
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
