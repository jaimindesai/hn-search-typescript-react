import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { apiMiddleware } from '../middelware';

import rootReducer from '../reducers';

let store = null;

export default function configureStore(initialState = {}) {
  const middlewares = [thunk, logger];
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
}
