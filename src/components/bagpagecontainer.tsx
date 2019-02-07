import { connect } from 'react-redux';
import { State } from '../reducers';
import { fetchBags } from '../actions/bagActions/fetchBags';
import  BagePage  from './bagpage';

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBags: () => dispatch(fetchBags())
 
});

export const BagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BagePage);
