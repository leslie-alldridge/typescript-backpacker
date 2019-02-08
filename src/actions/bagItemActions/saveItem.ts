import { actionTypes } from '../../common/constants/actionTypes';
import { BagItemEntity } from '../../model';
import axios from 'axios'

export const saveItem = (id, input) => (dispatch) => {
    console.log('actions');
    
  axios.post(`/api/v1/items/${id}`, input)
    .then((data:any) => {
      dispatch(fetchItemsCompleted(data.data.bagItems));
    });
};

const fetchItemsCompleted = (bag: BagItemEntity) => ({
  type: actionTypes.FETCH_ITEMS_COMPLETED,
  payload: bag,
});
