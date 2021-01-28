import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router';

import store from './redux/store'
import { history } from '@/history'
import App from '@/helpest/app'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history} >
         <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
