import { actionTypes } from '../../common/constants/actionTypes';
import { BagItemEntity } from '../../model';
import axios from 'axios'

export const deleteItem = (id, bagid, item) => (dispatch) => {
    console.log('actions');
    const data = {
        id, 
        bagid, 
        item
    }
  axios.delete(`/api/v1/items/${id}`, {data})
    .then((data:any) => {
      dispatch(fetchItemsCompleted(data.data.bagItems));
    });
};

const fetchItemsCompleted = (bag: BagItemEntity) => ({
  type: actionTypes.FETCH_ITEMS_COMPLETED,
  payload: bag,
});
