import { actionTypes } from '../../../common/constants/actionTypes';
import { BagEntity } from '../../../model';
import axios from 'axios'

// const bag = {
//   id: 1,
//   description: 'testact',
//   destination: 'testact',
//   username: 'leslie',
// }

export const fetchBags = () => (dispatch) => {
  axios.get('/api/v1/bags')
    .then((bag:any) => {
      dispatch(fetchBagsCompleted(bag));
    });
};

const fetchBagsCompleted = (bag: BagEntity) => ({
  type: actionTypes.FETCH_BAGS_COMPLETED,
  payload: bag,
});
