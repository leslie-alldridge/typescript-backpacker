import { actionTypes } from "../../common/constants/actionTypes";
import { BagEntity } from "../../model";
import axios from "axios";

function requestBags() {
  return {
    type: actionTypes.FETCH_BAG,
    isFetching: true,
    isAuthenticated: true
  };
}

export const fetchBags = user => dispatch => {
  dispatch(requestBags());
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
  isAuthenticated: true,
  isFetching: false,
  payload: bag
});
