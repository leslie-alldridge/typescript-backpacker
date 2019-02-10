import * as React from "react";

interface Props {
  registerToggle: () => void;
  loginUser(creds): () => void;
}

interface State {
  username: string;
  password: string;
  errorVisible: boolean;
}

class LoginForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorVisible: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const creds = {
      username: username.trim(),
      password: password.trim()
    };
    this.props.loginUser(creds);
  }

  handleError() {
    this.setState({
      errorVisible: false
    });
  }

  render() {
    return (
      <div id="wrapperForm">
        <form
          autoComplete="off"
          className="form-inline"
          onSubmit={e => {
            this.handleClick(e);
          }}
        >
          <input
            autoComplete="off"
            pattern=".{4,}"
            required
            title="4 characters minimum"
            id="input1"
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            autoComplete="current-password"
            pattern=".{8,}"
            required
            title="8 characters minimum"
            className="form-control"
            id="input12"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button id="input1btn" className="btn btn-primary" type="submit">
            Login
          </button>

          <button
            className="btn btn-primary"
            id="regLink"
            onClick={this.props.registerToggle}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
