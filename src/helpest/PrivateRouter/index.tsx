import { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase'


export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const [user] = useAuthState(auth);

  return (
    <Route
      {...rest}
      render={props => user
        ? children
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
