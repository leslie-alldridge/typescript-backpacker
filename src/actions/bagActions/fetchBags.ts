import { actionTypes } from "../../common/constants/actionTypes";
import { BagEntity } from "../../model";
import axios from "axios";

export const fetchBags = user => dispatch => {
  axios
    .get("/api/v1/bags", {
      params: {
        user
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
