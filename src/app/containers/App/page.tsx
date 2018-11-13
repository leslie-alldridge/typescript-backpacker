import * as React from "react";

interface Props {
  fetchMemberList: () => void;
}

export class MemberListPage extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchMemberList();
  }

  render() {
    return <div>hi</div>;
  }
}
