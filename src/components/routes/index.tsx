import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { PrivateRoute } from "components";
import { ChatPage, LogInPage } from "pages";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/log-in" component={LogInPage} exact={true} />
      <PrivateRoute path="/" component={ChatPage} exact={true} />
      {/* Instead, you can display a 404 page here if you wish */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
