import { connect } from "react-redux";
import { State } from "../../reducers";
import { fetchBags } from "../../actions/bagActions/fetchBags";
import { updateBag } from "../../actions/bagActions/updateBags";
import UpdateBag from "./updatebag";

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
  authentication: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchBags: user => dispatch(fetchBags(user)),
  updateBags: (id, destination, description, username) =>
    dispatch(updateBag(id, destination, description, username))
});

export const BagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateBag);
