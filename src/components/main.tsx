import * as React from "react";
import { connect } from "react-redux";
// import MainForm from "./MainForm";
// import BagPage from "./BagPage";
// import LoginForm from "./LoginForm";
import { FooterText} from "./Footer";
import { saveBagToDB } from "./members/actions/fetchMembers";
import { Header } from "./header";
import RegisterForm from "./register";
import LoginForm from './login'
import BagPage from "./bagpage";
import MainForm from "./mainform";
import { BagePageContainer } from "./bagpagecontainer";
// import Logout from "./Logout";
// import Loading from "./Loading";

interface Props {
  //define interface for props here
  auth: {user:{
    username: string
  }};
  bags:[];
  saveBagToDB(user, description,destination): void;
}

export default class Main extends React.Component<Props,{bags: [], formPage:boolean, registerToggle: boolean}> {
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

  handleClick(e:any, description:string, destination:string) {
    console.log("clicked");
    
    e.preventDefault();
    this.props.saveBagToDB(
      this.props.auth.user.username,
      description,
      destination
    );
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
        {!this.state.registerToggle && <LoginForm registerToggle={this.registerToggle}/>}
        {this.state.registerToggle && <RegisterForm registerToggle={this.registerToggle} />}
        {/* {!this.props.auth.isAuthenticated &&
          this.state.registerToggle && (
            <RegisterForm registerToggle={this.registerToggle} />
          )}
        {!this.props.auth.isAuthenticated &&
          !this.state.registerToggle && (
            <LoginForm registerToggle={this.registerToggle} />
          )}
        <Loading />
        {this.props.auth.isAuthenticated && (
          <Logout user={this.props.auth.user.username} />
        )}
        {this.state.formPage &&
          this.props.auth.isAuthenticated && (
            <MainForm handleClick={this.handleClick} />
          )}
        {this.props.auth.isAuthenticated && (
          <BagPage bagsData={this.props.auth} />
        )} */}
        <MainForm handleClick={this.handleClick}/>
        <BagePageContainer />
        <FooterText />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bags: state.bags,
    auth: state.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    saveBagToDB: (user, description, destination) => {
      return dispatch(saveBagToDB(user, description, destination));
    }
  };
};

 connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);