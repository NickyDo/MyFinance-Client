import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import configureStore from './redux/store';
import App from './containers/App'

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';

configureFakeBackend();

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
