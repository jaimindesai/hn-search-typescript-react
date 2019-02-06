import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import CoreLayout from './layouts/CoreLayout';
import rootReducer from './reducers/index';
import { State } from './types';
import * as qs from 'qs';

const bootManager = async (): Promise<State> => {
  const pathParts = window.location.pathname.split('/');

  const newsBoard = 'react';

  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  console.log('Params:', params);

  // define initial state of the app
  const initialState: any = {
    ...rootReducer({ newsBoard } as State, { type: 'init' })
  };

  return initialState as State;
};
const renderApp = async Component => {
  render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(CoreLayout);
