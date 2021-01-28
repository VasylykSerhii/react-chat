import React, { FC, ElementType, ReactNode } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase'

interface RouteProps {
  children?: typeof React.Component,
  key?: number
}

export const PrivateRoute:FC<RouteProps> = ({ children: Component, ...rest }) => {
  const [user] = useAuthState(auth);

  return (
    <Route
      {...rest}
      render={props => user
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: "/log-in",
            state: { from: props.location }
          }}
        />
      }
    />
  )
}
