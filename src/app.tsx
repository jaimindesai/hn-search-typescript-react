import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import CoreLayout from './layouts/CoreLayout';

const renderApp = async Component => {
  render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(CoreLayout);
