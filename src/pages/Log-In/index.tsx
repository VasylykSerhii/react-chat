import React, { FC } from "react";
import { Redirect } from "react-router-dom";

import { Wrapper } from "./style.component";
import LogInForm from "components/log-in-form";

const LogIn: FC = () => {
  return localStorage.getItem("accessToken") ? (
    <Redirect to="/" />
  ) : (
    <Wrapper>
      <LogInForm />
    </Wrapper>
  );
};

export default LogIn;
