import React, { FC } from "react";
import { Redirect } from "react-router-dom";

import { LogInForm, LogInWrapper } from "components";

const LogIn: FC = () => {
  return localStorage.getItem("accessToken") ? (
    <Redirect to="/" />
  ) : (
    <LogInWrapper>
      <LogInForm />
    </LogInWrapper>
  );
};

export default LogIn;
