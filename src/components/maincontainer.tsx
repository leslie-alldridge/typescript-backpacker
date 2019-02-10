import { connect } from "react-redux";
import { State } from "../reducers";
import { saveBag } from "../actions/bagActions";
import { registerUser, loginUser } from "../actions/auth";
import Main from "./main";

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
  authentication: state.auth
});

const mapDispatchToProps = dispatch => ({
  saveBags: (user, bag) => dispatch(saveBag(user, bag)),
  registerUser: user => dispatch(registerUser(user)),
  loginUser: creds => dispatch(loginUser(creds))
});

export const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
