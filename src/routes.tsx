import React from 'react'
import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from '@/helpest/PrivateRouter'
import Home from '@/pages/Home'
import LogIn from '@pages/Log-In'

const Routes = () => {
  return (
    <Switch>
      <Route path="/log-in" children={<LogIn />} exact={true} />
      <PrivateRoute path="/" children={<Home />} exact={true} />
    </Switch>
  )
}

export default Routes

