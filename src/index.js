import React from 'react';
import ReactDOM from 'react-dom';
import RootCmp from './RootCmp.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './assets/styles/style.scss';

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <RootCmp />
      </Router>
    </Provider>,
  document.getElementById('root')
);