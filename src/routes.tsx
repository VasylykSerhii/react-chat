import React, { FC } from 'react'
import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from '@/helpest/PrivateRouter'
import Chat from '@/pages/Chat'
import LogIn from '@pages/Log-In'

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/log-in" children={<LogIn />} exact={true} />
      <PrivateRoute path="/" children={<Chat />} exact={true} />
    </Switch>
  )
}

export default Routes

