import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: FC<RouteProps> = (props) => {
  if (!localStorage.getItem("accessToken")) {
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
