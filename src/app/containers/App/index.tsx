import * as React from 'react';
import * as style from './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Header, LoginForm } from 'app/components';
import { RegisterForm } from 'app/components';

library.add(fab, fas);

export namespace App {
  export interface Props {
    //   todo: TodoModel;
    //   editTodo: typeof TodoActions.editTodo;
    //   deleteTodo: typeof TodoActions.deleteTodo;
    //   completeTodo: typeof TodoActions.completeTodo;
  }

  export interface State {
    showLogin: boolean;
  }
}

export class App extends React.Component<App.Props, App.State> {
  constructor(props: App.Props) {
    super(props);
    this.state = {
      showLogin: true
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  render() {
    return (
      <div className={style.new}>
        <Header />
        {!this.state.showLogin && (
          <RegisterForm registerToggle={this.toggleLogin} />
        )}
        {this.state.showLogin && (
          <LoginForm registerToggle={this.toggleLogin} />
        )}
      </div>
    );
  }
}
