import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchBags } from '../../actions/bagActions';
import  BagePage  from './bagpage';
import { deleteBags } from '../../actions/bagActions';
import {updateBag} from '../../actions/bagActions';
import { showItems, archiveItem } from '../../actions/bagItemActions';

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
  item: state.item
});

const mapDispatchToProps = (dispatch) => ({
  fetchBags: () => dispatch(fetchBags()),
  deleteBags: (id) => dispatch(deleteBags(id)),
  updateBags: (id, destination, description) => dispatch(updateBag(id, destination, description)),
  showItems: (id) => dispatch(showItems(id)),
  checkItem: (id, item) => dispatch(archiveItem(id, item))
});

export const BagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BagePage);
