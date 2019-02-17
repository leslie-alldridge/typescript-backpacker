import * as React from "react";
import { FooterText } from "./common/footer";
import { Header } from "./common/header";
import RegisterForm from "./auth/register";
import LoginForm from "./auth/login";
import MainForm from "./mainform";
import { BagePageContainer } from "./bags/bagpagecontainer";
import Logout from "./auth/logout";
import { AuthEntity } from "../model";
import { Loading } from "../common/loading";

interface Props {
  saveBags(user, bag): () => void;
  registerUser(user): () => void;
  loginUser(user): () => void;
  authentication: AuthEntity[];
  load: [];
  bags: [];
}

export default class Main extends React.Component<
  Props,
  { bags: []; formPage: boolean; registerToggle: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      bags: this.props.bags || [],
      formPage: true,
      registerToggle: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.registerToggle = this.registerToggle.bind(this);
  }

  handleClick(e: any, description: string, destination: string) {
    e.preventDefault();
    const bag = {
      description,
      destination
    };
    this.props.saveBags(this.props.authentication[0].user["username"], bag);
  }

  private registerToggle() {
    this.setState(prevState => ({
      registerToggle: !prevState.registerToggle
    }));
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.props.authentication[0].isAuthenticated && (
          <Logout user={this.props.authentication[0].user} />
        )}
        <Loading />
        {!this.props.authentication[0].isAuthenticated &&
          this.state.registerToggle && (
            <RegisterForm
              auth={this.props.authentication}
              registerUser={this.props.registerUser}
              registerToggle={this.registerToggle}
            />
          )}
        {!this.props.authentication[0].isAuthenticated &&
          !this.state.registerToggle && (
            <LoginForm
              auth={this.props.authentication}
              loginUser={this.props.loginUser}
              registerToggle={this.registerToggle}
            />
          )}
        {this.state.formPage &&
          this.props.authentication[0].isAuthenticated && (
            <MainForm handleClick={this.handleClick} />
          )}
        {this.props.authentication[0].isAuthenticated && <BagePageContainer />}
        <FooterText />
      </div>
    );
  }
}
