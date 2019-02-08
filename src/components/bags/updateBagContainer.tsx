import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchBags } from '../../actions/bagActions/fetchBags';
import { updateBag } from '../../actions/bagActions/updateBags';
import UpdateBag from './updatebag';

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBags: () => dispatch(fetchBags()),
  updateBags: (id, destination, description) => dispatch(updateBag(id, destination, description))
});

export const BagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateBag);
