import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components";

import store from "./redux/store";
import { history } from "utils";
import { AppWrapper, Routes } from "components";
import { themes } from "constants/index";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={themes.defaultTheme}>
          <AppWrapper>
            <Routes />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
