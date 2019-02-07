import { actionTypes } from '../../common/constants/actionTypes';
import { BagEntity } from '../../model';
import axios from 'axios'

export const saveBag = (bag: BagEntity) => (dispatch) => {
    console.log(bag);
    
  axios.post('/api/v1/bags', bag)
    .then((data:any) => {
        console.log(data);
        
      dispatch(saveBagCompleted(data.data.bag));
    });
};

const saveBagCompleted = (bag: BagEntity) => ({
  type: actionTypes.SAVE_BAG,
  payload: bag,
});
