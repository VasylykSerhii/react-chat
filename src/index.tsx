import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import {
  Switch,
  Route
} from "react-router-dom";

import store from './redux/store'
import { history } from '@/history'
import routes from '@/routes.tsx'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history} >
        <div>
          <Switch>
            {
              routes.map((route, idx) => (
                <Route {...route} key={idx} />
              ))
            }
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
