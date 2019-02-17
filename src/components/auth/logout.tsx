import * as React from "react";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/auth";

const Logout = props => {
  return (
    <div id="wrapperlogin">
      <p id="welcome">
        Currently logged in as{" "}
        <span id="userlgdin">
          <b>{props.user.username}</b>
        </span>
      </p>
      <button
        id="logoutBtn"
        type="button"
        className="btn btn-primary"
        onClick={props.logoutUser}
      >
        <i className="fas fa-sign-out-alt" /> Log out
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
