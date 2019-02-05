import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
    composeWithDevTools()
  )
);