// import * as React from 'react';
// import { Route, HashRouter as Router, Switch } from 'react-router-dom';
// import { App } from './app';
// import { FooterText,  } from './components';
// import { Provider } from 'react-redux';
// import { store } from './store';

// export const AppRouter: React.StatelessComponent<{}> = () => {

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="container-fluid">
//           <Route component={App} />
//           <Switch>
//             <Route exact path="/" component={FooterText} />
//             <Route path="/FooterText" component={FooterText} />
//             <Route path="/members" component={FooterText} />
//             <Route exact path="/member" component={FooterText} />
//             <Route path="/member/:id" component={FooterText} />
//           </Switch>
//         </div>
//       </Router>
//     </Provider>
//   );
// }