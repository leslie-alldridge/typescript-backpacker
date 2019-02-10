import * as React from "react";
import { FooterText } from "./common/footer";
import { Header } from "./common/header";
import RegisterForm from "./auth/register";
import LoginForm from "./auth/login";
import MainForm from "./mainform";
import { BagePageContainer } from "./bags/bagpagecontainer";
import Logout from "./auth/logout";
// import Loading from "./Loading";

interface Props {
  saveBags(bag): () => void;
  registerUser(user): () => void;
  loginUser(user): () => void;
  auth: [];
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
        {!this.state.registerToggle && (
          <LoginForm
            loginUser={this.props.loginUser}
            registerToggle={this.registerToggle}
          />
        )}
        {this.state.registerToggle && (
          <RegisterForm
            registerUser={this.props.registerUser}
            registerToggle={this.registerToggle}
          />
        )}
        {/* {this.props.auth.isAuthenticated && (
          <Logout user={this.props.auth.user.username} />
        )} */}
        {/* {!this.props.auth.isAuthenticated &&
          this.state.registerToggle && (
            <RegisterForm registerToggle={this.registerToggle} />
          )}
        {!this.props.auth.isAuthenticated &&
          !this.state.registerToggle && (
            <LoginForm registerToggle={this.registerToggle} />
          )}
        <Loading />
       
        {this.state.formPage &&
          this.props.auth.isAuthenticated && (
            <MainForm handleClick={this.handleClick} />
          )}
        {this.props.auth.isAuthenticated && (
          <BagPage bagsData={this.props.auth} />
        )} */}
        <MainForm handleClick={this.handleClick} />
        <BagePageContainer />
        <FooterText />
      </div>
    );
  }
}
