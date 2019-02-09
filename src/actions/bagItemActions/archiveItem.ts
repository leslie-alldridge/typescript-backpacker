import { actionTypes } from "../../common/constants/actionTypes";
import { BagItemEntity } from "../../model";
import axios from "axios";

export const archiveItem = (id, item) => dispatch => {
  axios
    .post(`/api/v1/items/archive/${id}`, { item: item })
    .then((data: any) => {
      dispatch(fetchItemsCompleted(data.data.bagItems));
    });
};

const fetchItemsCompleted = (bag: BagItemEntity) => ({
  type: actionTypes.FETCH_ITEMS_COMPLETED,
  payload: bag
});
