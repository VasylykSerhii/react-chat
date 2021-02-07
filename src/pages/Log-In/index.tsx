import React, { FC } from "react";
import { Redirect } from "react-router-dom";

import { LogInForm, LogInWrapper } from "components";
import { authTokenService } from "services";

const LogIn: FC = () => {
  return authTokenService.isTokenValid() ? (
    <Redirect to="/" />
  ) : (
    <LogInWrapper>
      <LogInForm />
    </LogInWrapper>
  );
};

export default LogIn;
