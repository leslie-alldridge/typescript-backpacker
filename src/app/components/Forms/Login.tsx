import * as React from 'react';

export namespace LoginForm {
  export interface Props {
    //   todo: TodoModel;
    //   editTodo: typeof TodoActions.editTodo;
    //   deleteTodo: typeof TodoActions.deleteTodo;
    //   completeTodo: typeof TodoActions.completeTodo;
    registerToggle: any;
  }

  export interface State {
    username: string;
    password: string;
    errorVisible: boolean;
  }
}

export class LoginForm extends React.Component<
  LoginForm.Props,
  LoginForm.State
> {
  constructor(props: LoginForm.Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorVisible: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleClick(e: any) {
    e.preventDefault();
    const { username, password } = this.state;
    const creds = {
      username: username.trim(),
      password: password.trim()
    };
    console.log('login');
    console.log(creds);

    //this.props.loginUser(creds);
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
          className="form-inline"
          onSubmit={e => {
            this.handleClick(e);
          }}
        >
          <input
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
            pattern=".{8,}"
            required
            title="8 characters minimum"
            className="form-control"
            id="input1"
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
            onClick={() => {
              this.props.registerToggle();
              this.handleError();
            }}
          >
            Register
          </button>
        </form>

        {/* {this.state.errorVisible && <ErrorMessage reducer="auth" />} */}
      </div>
    );
  }
}
