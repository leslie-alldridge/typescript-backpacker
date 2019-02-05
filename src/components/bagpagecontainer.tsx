import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers';
import { MemberEntity } from '../model';
import { fetchBags } from '../components/member/actions/fetchBags';
// import { memberFieldChangeAction } from './actions/memberFieldChange';
// import { saveMemberAction } from './actions/saveMember';
import  BagePage  from './bagpage';

const mapStateToProps = (state: State, ownProps: any) => ({
  member: state.bag,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBags: () => dispatch(fetchBags())
 
});

export const BagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BagePage);
