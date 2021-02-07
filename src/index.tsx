import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components";

import store from "./redux/store";
import { history } from "utils/history";
import Routes from "utils/routes";
import AppWrapper from "components/app-wrapper";
import defaultTheme from "constants/theme/default-theme";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={defaultTheme}>
          <AppWrapper>
            <Routes />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
