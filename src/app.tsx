import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './hello';
// Stylesheet
import './styles/index.scss';

ReactDOM.render(
  <Hello compiler="Typescript'" bundler="Webpack'" />,
  document.getElementById('app')
);
