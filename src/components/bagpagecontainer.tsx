import { connect } from 'react-redux';
import { State } from '../reducers';
import { fetchBags } from '../actions/bagActions/fetchBags';
import  BagePage  from './bagpage';
import { deleteBags } from '../actions/bagActions/deleteBags';

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBags: () => dispatch(fetchBags()),
  deleteBags: (id) => dispatch(deleteBags(id))
});

export const BagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BagePage);
