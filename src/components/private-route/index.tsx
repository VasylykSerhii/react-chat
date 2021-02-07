import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { authTokenService } from "services";

const PrivateRoute: FC<RouteProps> = (props) => {
  if (!authTokenService.isTokenValid()) {
    return (
      <Redirect
        to={{
          pathname: "/log-in",
          state: { from: props.location },
        }}
      />
    );
  }

  return <Route {...props} />;
};

export default PrivateRoute;
