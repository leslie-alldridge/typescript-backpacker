import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { Footer, MembersPageContainer, MemberPageContainer } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={Footer} />
            <Route path="/Footer" component={Footer} />
            <Route path="/members" component={MembersPageContainer} />
            <Route exact path="/member" component={MemberPageContainer} />
            <Route path="/member/:id" component={MemberPageContainer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}