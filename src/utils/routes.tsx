import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { PrivateRoute } from "helpest/PrivateRouter";
import Chat from "pages/chat";
import LogIn from "pages/log-in";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/log-in" children={<LogIn />} exact={true} />
      <PrivateRoute path="/" children={<Chat />} exact={true} />
      {/* Instead, you can display a 404 page here if you wish */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
