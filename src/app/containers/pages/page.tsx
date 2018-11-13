import * as React from 'react';
import { MemberEntity } from './viewModel';

interface Props {
  memberList: MemberEntity[];

  fetchMemberListRequestStart: () => void;
}

export class MemberListPage extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchMemberListRequestStart();
  }

  render() {
    return <div>{this.props.memberList}</div>;
  }
}
