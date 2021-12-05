import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore } from 'redux';
import filters from './reducer';
import { Provider } from 'react-redux';

const store = createStore(filters);

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('root')
);
