import { Dispatch } from 'redux';

import { connect } from 'react-redux';
import { State } from '../../reducers';
import { MemberListPage } from './page';
import { fetchMemberListRequestStart } from '../../actions/bags';
import { mapMemberListFromModelToVm } from './mapper';

const mapStateToProps = (state: State) => ({
  // This mapping is necessary because we have two different ModelEntity interfaces with the same name.
  // This could be improved using selectors.
  memberList: mapMemberListFromModelToVm(state.memberListReducer.memberList)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMemberList: () => {
    dispatch(fetchMemberListRequestStart('hello'));
  }
});

export const MemberListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberListPage);
