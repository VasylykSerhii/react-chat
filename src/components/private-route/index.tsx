import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("accessToken") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/log-in",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
