import { connect } from 'react-redux';
import { State } from '../reducers';
import { saveBag } from '../actions/saveBags';
import  Main  from './main';

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
});

const mapDispatchToProps = (dispatch) => ({
  saveBags: (bag) => dispatch(saveBag(bag))
 
});

export const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
