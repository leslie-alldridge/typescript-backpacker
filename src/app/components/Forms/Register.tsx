import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export namespace RegisterForm {
  export interface Props {
    //   todo: TodoModel;
    //   editTodo: typeof TodoActions.editTodo;
    //   deleteTodo: typeof TodoActions.deleteTodo;
    //   completeTodo: typeof TodoActions.completeTodo;
  }

  export interface State {
    username: string;
    password: string;
    confirm: string;
    err: boolean;
  }
}

export class RegisterForm extends React.Component<
  RegisterForm.Props,
  RegisterForm.State
> {
  constructor(props: RegisterForm.Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm: '',
      err: false
    };
    this.handleChange = this.handleChange.bind(this);
    //   this.handleClick = this.handleClick.bind(this);
    //   this.clearError = this.clearError.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  // handleClick(e: any) {
  //   this.setState({
  //     err: true
  //   });

  //   e.preventDefault();
  //   const { password, confirm } = this.state;
  //   if (password !== confirm) {
  //     //this.props.registerError('Passwords do not match!');
  //     return;
  //   }
  //   //   const creds: object = {
  //   //     username: username.trim(),
  //   //     password: password.trim()
  //   //   };
  //   //this.props.registerUser(creds);
  // }

  // clearError() {
  //   //this.props.errorClear();
  // }

  render() {
    const { username, password, confirm } = this.state;

    return (
      <div id="wrapperForm2">
        <form
          className="form-inline"
          onSubmit={e => {
            //this.handleClick(e);
          }}
        >
          <input
            id="input1"
            className="form-control"
            pattern=".{4,}"
            required
            title="4 characters minimum"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={username}
          />

          <input
            id="input1"
            className="form-control"
            pattern=".{8,}"
            required
            title="8 characters minimum"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={password}
          />

          <input
            id="input1reg"
            className="form-control"
            pattern=".{8,}"
            required
            title="8 characters minimum"
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            onChange={this.handleChange}
            value={confirm}
          />

          <button id="input1btn" className="btn btn-primary" type="submit">
            Register
          </button>
          <button
            id="input1btnsub"
            className="btn btn-primary"
            onClick={() => {
              //   this.props.registerToggle()
              //   this.clearError()
            }}
          >
            <FontAwesomeIcon size={'1x'} icon={'chevron-left'} /> Back
          </button>
        </form>
      </div>
    );
  }
}
