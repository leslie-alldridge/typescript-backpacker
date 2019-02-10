import * as React from "react";
import { FooterText } from "./common/footer";
import { Header } from "./common/header";
import RegisterForm from "./auth/register";
import LoginForm from "./auth/login";
import MainForm from "./mainform";
import { BagePageContainer } from "./bags/bagpagecontainer";
import Logout from "./auth/logout";
import { AuthEntity } from "../model";
// import Loading from "./Loading";

interface Props {
  saveBags(bag): () => void;
  registerUser(user): () => void;
  loginUser(user): () => void;
  authentication: AuthEntity[];
  //define interface for props here
  // saveBagToDB:(username, description, destination)=> void;

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
      destination,
      username: "leslie"
    };
    this.props.saveBags(bag);
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
        {this.props.authentication["iat"] &&
          this.props.authentication["iat"] != 0 && (
            <Logout user={this.props.authentication["username"]} />
          )}
        {!this.props.authentication["iat"] && this.state.registerToggle && (
          <RegisterForm
            registerUser={this.props.registerUser}
            registerToggle={this.registerToggle}
          />
        )}
        {!this.props.authentication["iat"] && !this.state.registerToggle && (
          <LoginForm
            loginUser={this.props.loginUser}
            registerToggle={this.registerToggle}
          />
        )}
        {this.state.formPage && this.props.authentication["iat"] && (
          <MainForm handleClick={this.handleClick} />
        )}
        {this.props.authentication["iat"] && <BagePageContainer />}
        {/* <MainForm handleClick={this.handleClick} /> */}
        <FooterText />
      </div>
    );
  }
}
