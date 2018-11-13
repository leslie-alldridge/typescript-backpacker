import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from './app/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [
  reduxThunk,
];


export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);