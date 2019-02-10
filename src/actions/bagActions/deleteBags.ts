import { actionTypes } from "../../common/constants/actionTypes";
import { BagEntity } from "../../model";
import axios from "axios";

export const deleteBags = (id, user) => dispatch => {
  axios
    .delete(`/api/v1/bags/${id}`, {
      params: {
        username: user
      }
    })
    .then((data: any) => {
      dispatch(fetchBagsCompleted(data.data.bag));
    });
};

const fetchBagsCompleted = (bag: BagEntity) => ({
  type: actionTypes.FETCH_BAGS_COMPLETED,
  payload: bag
});
