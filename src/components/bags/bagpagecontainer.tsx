import { connect } from "react-redux";
import { State } from "../../reducers";
import { fetchBags } from "../../actions/bagActions";
import BagePage from "./bagpage";
import { deleteBags } from "../../actions/bagActions";
import { updateBag } from "../../actions/bagActions";
import {
  showItems,
  archiveItem,
  saveItem,
  deleteItem
} from "../../actions/bagItemActions";

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
  item: state.item,
  authentication: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchBags: user => dispatch(fetchBags(user)),
  deleteBags: (id, user) => dispatch(deleteBags(id, user)),
  updateBags: (id, destination, description, username) =>
    dispatch(updateBag(id, destination, description, username)),
  showItems: id => dispatch(showItems(id)),
  checkItem: (id, item, user) => dispatch(archiveItem(id, item, user)),
  saveItem: (id, item, user) => dispatch(saveItem(id, item, user)),
  deleteItem: (id, bagid, input, user) =>
    dispatch(deleteItem(id, bagid, input, user))
});

export const BagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BagePage);
