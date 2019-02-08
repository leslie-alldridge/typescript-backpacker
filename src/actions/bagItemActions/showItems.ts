import { actionTypes } from '../../common/constants/actionTypes';
import { BagItemEntity } from '../../model';
import axios from 'axios'

export const showItems = (id) => (dispatch) => {
    console.log('actions');
    
  axios.get(`/api/v1/items/${id}`)
    .then((data:any) => {
      dispatch(fetchItemsCompleted(data.data.bagItems));
    });
};

const fetchItemsCompleted = (bag: BagItemEntity) => ({
  type: actionTypes.FETCH_ITEMS_COMPLETED,
  payload: bag,
});
