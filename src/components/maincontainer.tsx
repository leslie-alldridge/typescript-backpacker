import { connect } from "react-redux";
import { State } from "../reducers";
import { saveBag } from "../actions/bagActions";
import { registerUser } from "../actions/auth";
import Main from "./main";

const mapStateToProps = (state: State, ownProps: any) => ({
  bags: state.bag,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  saveBags: bag => dispatch(saveBag(bag)),
  registerUser: user => dispatch(registerUser(user))
});

export const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
