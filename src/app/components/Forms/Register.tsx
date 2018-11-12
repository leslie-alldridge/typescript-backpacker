import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import * as style from '../../containers/App/style.css';

const divStyle = {
  color: 'blue',
  height: '10vh',
  position: 'relative',
  width: '100vw',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
} as React.CSSProperties;

const heroText = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  background: 'none'
} as React.CSSProperties;

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
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleClick = this.handleClick.bind(this);
    //   this.clearError = this.clearError.bind(this);
  }

  // handleChange(e: any) {
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: e.target.value
  //   });
  // }

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
    return (
      <div className={style.subHead} style={divStyle}>
        <Jumbotron style={heroText}>
          <h3>Backpack Tracker</h3>
          <h4>Keep track of your packed bags</h4>
        </Jumbotron>
      </div>
    );
  }
}
