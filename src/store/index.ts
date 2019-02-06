import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { apiMiddleware } from '../middelware';
import { State } from '../types';

export default function configureStore() {
  return createStore(
    reducers,
    compose(applyMiddleware(thunkMiddleware, apiMiddleware))
  );
}
